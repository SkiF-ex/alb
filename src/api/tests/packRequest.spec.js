import { packRequest } from '../packRequest'

describe.skip('packRequest.js', () => {
  it('should put stickers', async () => {
    const jsonMethod = jest.fn(() => Promise.resolve(null))

    // window.fetch = () => {
    //   return Promise.resolve({
    //     json: jsonMethod,
    //   })
    // };

    // jest.spyOn(window, 'fetch').mockImplementation(
    const response = await packRequest(3);

    // expect(fetch).toHaveBeenLastCalledWith(
    //   'http://localhost:3004/packs/1', {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({packs: 2})
    // })

    expect(jsonMethod).toHaveBeenCalled();

    expect(response).toBeNull();

  })
})
