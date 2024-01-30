import Image from "next/image";

type Props = {
	img: string;
	w?: number;
	h?: number;
};

export default function ChampionBanner({ img, w, h }: Props) {
	return (
		<div key="champion-banner" className="ml-5 mt-7 object-contain">
			<Image
				src={img}
				width={w * 2 ?? 0}
				height={h * 2 ?? 0}
				alt={""}
			/>
		</div>
	);
}
