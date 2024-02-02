import { lol_api } from "@/util/client";
import { useRouter } from "next/router";
import type { ChampionsDataDragonDetails } from "twisted/dist/models-dto";
import { championIcon } from "@/util/images";
import Image from "next/image";

type Props = {
	data: ChampionsDataDragonDetails;
};

export async function getServerSideProps() {
	const data = await lol_api.DataDragon.getChampion();
	return {
		props: {
			data: data.data,
		},
	};
}

export default function Page({ data }: Props) {
	console.log(data);
	const router = useRouter();
	return (
		<div className="grid grid-cols-4 justify-items-center">
			{Object.values(data).map((champion: ChampionsDataDragonDetails) => {
				return (
					<>
						<div>
							<button
								key={champion.id}
								className="text-black"
								onClick={() => {
									router.push(`/champions/${champion.id}`);
								}}
							>
								<Image
									alt={champion.name}
									src={championIcon(
										champion.image.full,
										champion.version
									)}
									width={120}
									height={120}
								/>
							</button>
							<span>{champion.name}</span>
						</div>
					</>
				);
			})}
		</div>
	);
}
