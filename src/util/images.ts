export const championIcon = (img: string, patch: string) =>
	`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${img}`;
export const championSplash = (championName: string, skin: number = 0) =>
	`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin}.jpg`;
export const championBanner = (championName: string, skin: number = 0) =>
	`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin}.jpg`;