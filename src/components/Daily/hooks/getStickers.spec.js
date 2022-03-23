import { useGetStickers } from './getStickers';
import { renderHook, act } from '@testing-library/react-hooks'

describe('getStickers', () => {
  it('should return functions', () => {
    const avatars = () => {
      return [{id: 1, photo: '1'}, {id: 2, photo: '1'}]
    };

    const developers = () => {
      return {
        id: 1,
        team: [
          {
            id: 1,
            name: "Max",
            position: "team leader",
            avatar: "non-profile.jpg",
            type: "web"
          },
        ]
      }
    };

    const firstJson = jest.fn();
    const secondJson = jest.fn();

    const { result } = renderHook(() => useGetStickers())
    const promiseMock = jest.spyOn(Promise, 'all');
    promiseMock.mockImplementationOnce(() => {
      return Promise.resolve( [{json: firstJson}, {json: secondJson}])
    })
    promiseMock.mockImplementationOnce(async () => {
      return 'mock-data';
    })

    const [ getStickers ] = result.current;

    getStickers();
    //
    // expect(firstJson).toHaveBeenCalled();
    // expect(secondJson).toHaveBeenCalled();
  })
})

//
// export const useGetStickers = () => {
//   const [stickerPacks, setStickerPacks] = useState('');
//   const [newStickerPack, setNewStickersPack] = useState([]);
//   const [newStickersOpened, setNewStickersOpened] = useState(false);
//
//   const getStickers = () => {
//     Promise.all([
//       fetch('http://localhost:3004/developers'),
//       fetch('http://localhost:3004/avatars')])
//       .then((response) => Promise.all([response[0].json(), response[1].json()]))
//       .then((data) => {
//           let team = data[0][0].team;
//           const webTeam = team.filter(elem => elem.type === 'web');
//           const mobileTeam = team.filter(elem => elem.type === 'mobile');
//           const avatars = data[1];
//
//           const newWebProfiles = pasteStickers(webTeam, getRandomArrayElement);
//           const newMobileProfiles = pasteStickers(mobileTeam, getRandomArrayElement);
//
//           team = arrayEdit(team, newWebProfiles, avatars);
//           team = arrayEdit(team, newMobileProfiles, avatars);
//
//           newStickerPack.splice(0, newStickerPack.length);
//
//           for (let i = 0; i < newWebProfiles.length; i++) {
//             newStickerPack.push(avatars.find((elem) => elem.id === newWebProfiles[i].id))
//             newStickerPack.push(avatars.find((elem) => elem.id === newMobileProfiles[i].id))
//           }
//           setNewStickersPack(newStickerPack);
//
//           post(team, stickerPacks);
//           setNewStickersOpened(true);
//         }
//       );
//   }
//
//   return [ stickerPacks, setStickerPacks, newStickerPack, newStickersOpened, setNewStickersOpened, getStickers ];
// }
