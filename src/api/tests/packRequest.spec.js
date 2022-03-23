import fetchMock from 'fetch-mock';
import { packRequest } from '../packRequest'

describe('packRequest.js', () => {
  it('should put stickers', async () => {
    fetchMock.put('http://localhost:3004/packs/1', {});

    await packRequest(3);

    const url = fetchMock.lastUrl()
    const options = fetchMock.lastOptions()

    expect(url).toEqual('http://localhost:3004/packs/1');
    expect(options).toEqual({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({packs: 2})
    });
  })
})
