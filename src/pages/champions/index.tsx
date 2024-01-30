import { lol_api } from "@/util/client";
import { useRouter } from "next/router";
import type { ChampionsDataDragonDetails } from "twisted/dist/models-dto";

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
	const router = useRouter();
	return (
		<>
			<span>hello champions!</span>
			<div className="grid grid-cols-4 gap-3 justify-items-center">
				{Object.values(data).map((champion) => {
					return (
						<button
							key={champion.id}
							className="bg-blue-500 hover:bg-blue-700 text-white w-1/4 mt-3"
							onClick={() => {
								router.push(`/champions/${champion.id}`);
							}}
						>
							{champion.name}
						</button>
					);
				})}
			</div>
		</>
	);
}
