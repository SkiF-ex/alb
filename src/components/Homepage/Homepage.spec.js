import Homepage from "./Homepage";
import {shallow} from "enzyme";
import React from "react";

let counter = 0;

const handlePage = (elem) => counter = 1
const component = shallow(<Homepage handlePage={handlePage}/>);

describe('Homepage component', () => {
  beforeEach(() => {
    counter = 0;
  });

  it('should render component', () => {
    const wrapper = component.find("#section");

    expect(wrapper.length).toBe(1);
  });

  it('should click on next_page button', () => {
    const btn = component.find(".next_page");
    btn.simulate('click');

    expect(counter).toEqual(1);
  });
})
