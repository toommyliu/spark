import { RiotApi, LolApi } from "twisted";

const riot_api = new RiotApi({
	key: process.env.RIOT_API!,
});
const lol_api = new LolApi({
	key: process.env.RIOT_API!,
});

export { riot_api, lol_api };