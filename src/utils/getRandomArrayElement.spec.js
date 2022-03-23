import getRandomArrayElement from "./getRandomArrayElement";

describe('getRandomArrayElement util', () => {
  it('should return one object', () => {
    expect(getRandomArrayElement([{i: 1}, {i: 1}])).toStrictEqual({i: 1});
  })
})
