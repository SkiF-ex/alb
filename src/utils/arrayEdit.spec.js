import arrayEdit from "./arrayEdit";

describe('arrayEdit util', () => {
  it('should edit array', () => {
    const team = [{id: 1, avatar: 'non-photo'}];
    const avatars = [{id: 1, photo: 'photo'}];

    arrayEdit(team, team, avatars);
    expect(team).toStrictEqual([{id: 1, avatar: 'photo'}])
  })
})
