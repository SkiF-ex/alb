import post from '../post';
import { packRequest } from "../packRequest";
import { teamRequest } from "../teamRequest";

jest.mock('../packRequest');
jest.mock('../teamRequest');

describe('post.js', () => {
  it('internal functions should be init', () => {
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
    post(team, 3);

    expect(packRequest).toHaveBeenCalledWith(3)
    expect(teamRequest).toHaveBeenLastCalledWith({
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
    });
  })
})
