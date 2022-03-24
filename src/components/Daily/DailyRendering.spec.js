import { DailyRendering } from "./DailyRendering";
import { act, create } from 'react-test-renderer';

import React from "react";
import {shallow} from "enzyme";

describe('DailyRendering component', () => {
  it('should render component', () => {
    const useGetStickers = () => [
      jest.fn(),
      jest.fn(),
      jest.fn(),
      [{id: 'elem1'}, {id: 'elem2'}, {id: 'elem3'}],
      false,
      jest.fn(),
      [1, 2, 3],
      jest.fn(),
    ];

    let component;
    act(() => {
      component = create(
        <DailyRendering useGetStickers={useGetStickers}/>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should find pack tree', () => {
    const useGetStickers = () => [
      jest.fn(),
      jest.fn(),
      jest.fn(),
      [{id: 'elem1'}, {id: 'elem2'}, {id: 'elem3'}],
      false,
      jest.fn(),
      [1, 2, 3],
      jest.fn(),
    ];

    const component = shallow(<DailyRendering useGetStickers={useGetStickers}/>);
    expect(component.find('.button').length).toBe(0);
  });

  it('should find set tree', () => {
    const useGetStickers = () => [
      jest.fn(),
      jest.fn(),
      jest.fn(),
      [{id: 'elem1'}, {id: 'elem2'}, {id: 'elem3'}],
      true,
      jest.fn(),
      [1, 2, 3],
      jest.fn(),
    ];

    const component = shallow(<DailyRendering useGetStickers={useGetStickers}/>);
    component.find('.button').simulate('click');
    expect(component.find('.stickers_window').length).toBe(1);
  });
})
