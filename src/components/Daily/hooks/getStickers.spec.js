import { useGetStickers } from './getStickers';
import fetchMock from 'fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks'

import pasteStickers from "../../../utils/paste";
import getRandomArrayElement from "../../../utils/getRandomArrayElement";
import arrayEdit from "../../../utils/arrayEdit";

jest.mock('../../../utils/paste');
jest.mock('../../../utils/getRandomArrayElement');
jest.mock('../../../utils/arrayEdit');

describe('getStickers', () => {
  it('should return functions', async () => {
    const avatars = () => {
      return [{id: 1, photo: '1'}, {id: 2, photo: '1'}]
    };

    const developers = () => {
      return [{
        id: 1,
        team: [
          {
            id: 1,
            name: "Max",
            position: "team leader",
            avatar: "non-profile.jpg",
            type: "web"
          },
          {
            id: 2,
            name: "Maxim",
            position: "tech leader",
            avatar: "non-profile.jpg",
            type: "mobile"
          }
        ]
      }]
    };

    fetchMock.get('http://localhost:3004/developers', developers);
    fetchMock.get('http://localhost:3004/avatars', avatars);

    pasteStickers.mockImplementationOnce(() => [
      {
        id: 1,
        name: 'Max',
        position: 'team leader',
        avatar: 'non-profile.jpg',
        type: 'web'
      }
    ]);
    pasteStickers.mockImplementationOnce(() => [
      {
        id: 2,
        name: 'Maxim',
        position: 'tech leader',
        avatar: 'non-profile.jpg',
        type: 'mobile'
      }
    ]);

    arrayEdit.mockImplementationOnce(() => [
      {
        id: 1,
        name: 'Max',
        position: 'team leader',
        avatar: 'non-profile.jpg',
        type: 'web'
      }
    ])

    arrayEdit.mockImplementationOnce(() => [
      {
        id: 2,
        name: 'Maxim',
        position: 'tech leader',
        avatar: 'non-profile.jpg',
        type: 'mobile'
      }
    ])

    const { result } = renderHook(() => useGetStickers())

    const [ getStickers ] = result.current;

    await getStickers();

    expect(pasteStickers).toHaveBeenCalledWith([
      {
        "avatar": "non-profile.jpg",
        "id": 1, "name": "Max",
        "position": "team leader",
        "type": "web"
      }],
      getRandomArrayElement
      )
    expect(pasteStickers).toHaveBeenLastCalledWith([
      {
        "avatar": "non-profile.jpg",
        "id": 2,
        "name": "Maxim",
        "position": "tech leader",
        "type": "mobile"
      }],
      getRandomArrayElement
      )

    expect(arrayEdit).toHaveBeenCalledWith(
      [{"avatar": "non-profile.jpg", "id": 1, "name": "Max", "position": "team leader", "type": "web"}, {"avatar": "non-profile.jpg", "id": 2, "name": "Maxim", "position": "tech leader", "type": "mobile"}],
      [{"avatar": "non-profile.jpg", "id": 1, "name": "Max", "position": "team leader", "type": "web"}],
      [{"id": 1, "photo": "1"}, {"id": 2, "photo": "1"}]
    )
    expect(arrayEdit).toHaveBeenLastCalledWith(
      [{"avatar": "non-profile.jpg", "id": 1, "name": "Max", "position": "team leader", "type": "web"}],
      [{"avatar": "non-profile.jpg", "id": 2, "name": "Maxim", "position": "tech leader", "type": "mobile"}],
      [{"id": 1, "photo": "1"}, {"id": 2, "photo": "1"}]
    );
  })
})
