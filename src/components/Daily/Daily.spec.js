import Daily from "./Daily";
// import {shallow} from "enzyme";
import { act, create } from 'react-test-renderer';



import React from "react";

// const component = shallow(<Daily />);

describe('Daily component', () => {

  it('should render component', () => {
    let component;
    act(() => {
      component = create(
        <Daily />
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
    // const wrapper = component.find(".stickers_window");
    // expect(wrapper.length).toBe(1);
  });
})
