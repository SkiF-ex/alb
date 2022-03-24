import Homepage from "./Homepage";
import { act, create } from 'react-test-renderer';
import React from "react";
import {MemoryRouter} from "react-router";
import {shallow} from "enzyme";

describe('Homepage component', () => {
  it('should render component', () => {
    let component;
    act(() => {
      component = create(
        <MemoryRouter>
          <Homepage />
        </ MemoryRouter>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should find .gray_window', () => {
    const component = shallow(<Homepage />);
    component.find('.get_stickers').simulate('click');

    expect(component.find('.gray_window').length).toBe(1);
  });

  it('should close getStickers window', () => {
    const component = shallow(<Homepage />);
    component.find('.get_stickers').simulate('click');
    component.find('.gray_window').simulate('click');

    expect(component.find('.gray_window').length).toBe(0);
  });
})
