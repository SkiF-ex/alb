import TeamChoose from "./TeamChoose";
import {shallow} from "enzyme";
import React from "react";

let counter = 0;

const handlePage = (elem) => counter = 1
const component = shallow(<TeamChoose handlePage={handlePage}/>);

describe('TeamChoose component', () => {
  beforeEach(() => {
    counter = 0;
  });

  it('should render component', () => {
    const wrapper = component.find("#webTeam");

    expect(wrapper.length).toBe(1);
  });

  it('should click on first button', () => {
    const btn = component.find(".button_previous");
    btn.simulate('click');

    expect(counter).toEqual(1);
  });

  it('should click on second button', () => {
    const btn = component.find(".web");
    btn.simulate('click');

    expect(counter).toEqual(1);
  });

  it('should click on third button', () => {
    const btn = component.find(".mobile");
    btn.simulate('click');

    expect(counter).toEqual(1);
  });
})
