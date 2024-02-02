import { lol_api } from "@/util/client";
import { championIcon, championSplash } from "@/util/images";
import titlecase from "@/util/titlecase";
import type { GetServerSidePropsContext } from "next";
import Image from "next/image";
import type {
	ChampionsDataDragonDetails,
	ChampionsDataDragonDetailsSolo,
} from "twisted/dist/models-dto";

type Props = {
	champion: ChampionsDataDragonDetails;
	additional_info: ChampionsDataDragonDetailsSolo;
};

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

const KEYS = ["Q", "W", "E", "R"];

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
			<div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
				<main className="flex-1">
					<h1 className="flex flex-col items-center pt-10 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
						{correctName}, {title}
					</h1>
					<section className="w-full pt-6 md:pt-24 lg:pt-32">
						<div className="px-4 md:px-6">
							<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
								<div>
									<Image
										src={championSplash(champion.name)}
										width={1280}
										height={720}
										alt={champion.name}
										className="object-contain"
									/>
								</div>
								<div className="flex flex-col items-start">
									<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
										{lore}
									</p>
								</div>
							</div>
						</div>
					</section>
					<hr className="mt-5" />
					<section className="w-full py-5">
						<div className="container space-y-12 px-4 md:px-6">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<div className="">
									<span className="inline-block rounded-lg bg-gray-100 px-3 py-1 font-bold text-2xl dark:bg-gray-800">
										Abilities
									</span>
								</div>
							</div>
							<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
								<div
									className="grid gap-1"
									key={"spell-passive"}
								>
									<div className="flex items-center gap-2">
										<Image
											src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passive.image.full}`}
											width={passive.image.w}
											height={passive.image.h}
											alt={passive.name}
										/>
										<h3 className="text-lg font-bold">
											{passive.name} (Passive)
										</h3>
									</div>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
										{passive.description}
									</p>
								</div>
								{/* @ts-expect-error typings are incorrect */}
								{spells.map((spell, idx) => {
									return (
										<div
											className="grid gap-1"
											key={`spell-${idx}`}
										>
											<div className="flex items-center gap-2">
												<Image
													src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
													width={spell.image.w}
													height={spell.image.h}
													alt={spell.name}
												/>
												<h3 className="text-lg font-bold">
													{spell.name} ({KEYS[idx]})
												</h3>
											</div>
											<p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
												{spell.description}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
