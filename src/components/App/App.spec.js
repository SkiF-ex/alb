import React from 'react';
import App from './App';
import {shallow} from "enzyme";

const component = shallow(<App />);

describe('App component', () => {
  it('should render app component', () => {
    const wrapper = component.find(".main");
    expect(wrapper.length).toBe(1);
  })
})


