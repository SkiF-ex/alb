import { DailyRendering } from "./DailyRendering";
// import {shallow} from "enzyme";
import { act, create } from 'react-test-renderer';



import React from "react";

// const component = shallow(<Daily />);

describe('DailyRendering component', () => {
  it('should render component', () => {
    const useGetStickers = () => [
      jest.fn(),
      jest.fn(),
      jest.fn(),
      ['elem1', 'elem2', 'elem3'],
      jest.fn(),
      jest.fn(),
    ];

    let component;
    act(() => {
      component = create(
        <DailyRendering useGetStickers={useGetStickers}/>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
    // const wrapper = component.find(".stickers_window");
    // expect(wrapper.length).toBe(1);
  });
})
