import fetchMock from 'fetch-mock';
import getCounter from "./getCounter";

describe('getCounter', () => {
    it('it should get counter', async () => {
        fetchMock.get('http://localhost:3004/packs', () => [{packs: 2}]);

        const mockArr = [];

        const setPacks = jest.fn();
        const setMock = jest.fn((param) => mockArr.push(param));
        expect(mockArr).toEqual([]);
        await getCounter(setPacks, setMock);

        const url = fetchMock.lastUrl()

        expect(url).toEqual('http://localhost:3004/packs');
        expect(setPacks).toHaveBeenCalledWith(2)
        expect(setMock).toHaveBeenCalledWith([0, 1])
        expect(mockArr).toEqual([[0, 1]]);
    })
});
