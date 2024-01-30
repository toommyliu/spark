import { lol_api } from "@/util/client";
import type {
	ChampionsDataDragonDetails,
	ChampionsDataDragonDetailsSolo,
} from "twisted/dist/models-dto";
import type { GetServerSidePropsContext } from "next";
import titlecase from "@/util/titlecase";
import Image from "next/image";

type Props = {
	champion: ChampionsDataDragonDetails;
	additional_info: ChampionsDataDragonDetailsSolo;
};

const championIcon = (img: string, patch: string) =>
	`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${img}`;
const championSplash = (championName: string) =>
	`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}.jpg`;
const championBanner = (championName: string, skin: number = 0) =>
	`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin}.jpg`;

export async function getServerSideProps({
	req,
	res,
	query,
}: GetServerSidePropsContext) {
	const { champion } = query;

	res.setHeader("Cache-Control", "public, s-maxage=86400");

	const out = await lol_api.DataDragon.getChampion();
	const name = titlecase(champion as string);

	if (!out.data[name]) {
		return {};
	}

	const { key } = out.data[name];
	const additional_info = await lol_api.DataDragon.getChampion(
		Number.parseInt(key)
	);

	return {
		props: {
			champion: out.data[name],
			additional_info,
		},
	};
}

export default function Page({ champion, additional_info }: Props) {
	if (!champion || !additional_info) {
		return (
			<div>
				<span>champion not found!</span>
			</div>
		);
	}

	console.log(champion);
	console.log(additional_info);

	const {
		name: correctName,
		title,
		stats,
		version,
		image,
		id,
		blurb,
		key,
	} = champion;
	const { lore, passive, spells, tags, skins } = additional_info;

	return (
		<>
			<Image
				src={championIcon(image.full, version)}
				alt={"picture"}
				width={image.w}
				height={image.h}
			/>
			<hr />
			<div className="about">
				{correctName}: {title}
				<p>{lore}</p>
				Classes: {tags.join(", ")}
			</div>
			<hr />
			<div className="abilities">
				<ul>
					<li>
						{passive.name}: {passive.description}
					</li>
					{/* @ts-expect-error the typings are incorrect */}
					{spells.map((spell) => (
						<li key={spell.id}>
							{spell.name}: {spell.description}
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div className="skins">
				skin count: {skins.length}
				<div>
					{skins.map((skin) => {
						return (
							<>
								{skin.name}
								<Image
									src={championBanner(
										champion.name,
										skin.num
									)}
									width={256}
									height={128}
									alt={skin.name}
									key={skin.num}
								/>
								<span>{skin.chromas ? "(chroma)" : ""}</span>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}
