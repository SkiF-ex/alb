import pasteStickers from "../../../utils/paste";
import getRandomArrayElement from "../../../utils/getRandomArrayElement";
import arrayEdit from "../../../utils/arrayEdit";
import post from "../../../api/post";
import {useState} from "react";

export const useGetStickers = () => {
  const [stickerPacks, setStickerPacks] = useState('');
  const [newStickerPack, setNewStickersPack] = useState([]);
  const [newStickersOpened, setNewStickersOpened] = useState(false);

  const getStickers = async () => {
    await Promise.all([
      fetch('http://localhost:3004/developers'),
      fetch('http://localhost:3004/avatars')])
      .then(response => Promise.all([response[0].json(), response[1].json()]))
      .then((data) => {
          let team = data[0][0].team;
          const webTeam = team.filter(elem => elem.type === 'web');
          const mobileTeam = team.filter(elem => elem.type === 'mobile');
          const avatars = data[1];

          const newWebProfiles = pasteStickers(webTeam, getRandomArrayElement);
          const newMobileProfiles = pasteStickers(mobileTeam, getRandomArrayElement);
          console.log('newWebProfiles', newWebProfiles)
          console.log('newMobileProfiles', newMobileProfiles)
          team = arrayEdit(team, newWebProfiles, avatars);
          team = arrayEdit(team, newMobileProfiles, avatars);

          newStickerPack.splice(0, newStickerPack.length);

          for (let i = 0; i < newWebProfiles.length; i++) {
            newStickerPack.push(avatars.find((elem) => elem.id === newWebProfiles[i].id))
            newStickerPack.push(avatars.find((elem) => elem.id === newMobileProfiles[i].id))
          }
          setNewStickersPack(newStickerPack);

          post(team, stickerPacks);
          setNewStickersOpened(true);
        }
      )
  }

  return [ getStickers, stickerPacks, setStickerPacks, newStickerPack, newStickersOpened, setNewStickersOpened ];
}
