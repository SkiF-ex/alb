import React from 'react';
import { shallow } from "enzyme";
import Profile from "./Profile";

describe('Profile component', () => {
  it('should correct render', () => {
    const developers = [{avatar: 'avatar', name: 'max', position: 'developer'}]
    const component = shallow(<Profile  firstPoz={0} secondPoz={1} developers={developers}/>);
    const wrapper = component.find(".profile");

    expect(wrapper.length).toBe(1);
  });

  it('should incorrect render', () => {
    const component = shallow(<Profile  firstPoz={0} secondPoz={1} developers={undefined}/>);
    const wrapper = component.find(".profile");

    expect(wrapper.length).toBe(0);
  });
});
