import Daily from "./Daily";
import {shallow} from "enzyme";
import React from "react";

const component = shallow(<Daily />);

describe('Daily component', () => {

  it('should render component', () => {
    const wrapper = component.find(".stickers_window");
    expect(wrapper.length).toBe(1);
  });

  it('should', () => {
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

    const promiseMock = jest.spyOn(Promise, 'all');
    promiseMock.mockImplementation(async () => {
      return [{json: jest.fn()}, {json: jest.fn()}]
    })
  })
})
