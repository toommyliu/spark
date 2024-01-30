type Props = {
	name: string;
	lore: string;
	title: string;
};

export default function ChampionAbout({ name, lore, title }: Props) {
	return (
		<div key="about" className="">
			<div className="flex flex-col items-center">
				<span className="font-bold text-xl mt-5">{name}</span>
				<span className="italic font-semibold">{title}</span>
			</div>

			<div key="lore" className="italic px-4">
				{lore}
			</div>
		</div>
	);
}
