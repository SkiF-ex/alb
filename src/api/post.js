import { packRequest } from "./packRequest";
import { teamRequest } from "./teamRequest";

const post = (team, stickerPacks) => {
    packRequest(stickerPacks)
    teamRequest(team)
}

export default post;
