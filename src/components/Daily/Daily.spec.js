import Daily from "./Daily";
import {shallow} from "enzyme";
import React from "react";

const component = shallow(<Daily />);

describe('Daily component', () => {
  it('should render component', () => {
    const wrapper = component.find(".stickers_window");
    expect(wrapper.length).toBe(1);
  });
})
