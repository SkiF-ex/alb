import fetchMock from 'fetch-mock';
import { teamRequest } from '../teamRequest';

describe('packRequest.js', () => {
  it('should put stickers', async () => {
    fetchMock.put('http://localhost:3004/developers/1', {});

    const team = {
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

    await teamRequest(team);

    const url = fetchMock.lastUrl()
    const options = fetchMock.lastOptions()

    expect(url).toEqual('http://localhost:3004/developers/1');
    expect(options).toEqual({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({team: {
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
      }})
    });
  })
})
