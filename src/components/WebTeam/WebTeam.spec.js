import WebTeam from "./WebTeam";
import {shallow} from "enzyme";
import React from "react";
import {DATA_MOCK_MOBILE_TEAM} from "../TeamChoose/mock";

describe('WebTeam component', () => {
  it('should render component', () => {
    const handleOpen = jest.fn();
    const component = shallow(<WebTeam team={'web'} dataMock={DATA_MOCK_MOBILE_TEAM} handlePage={handleOpen}/>);
    const wrapper = component.find("#webTeam");

    expect(wrapper.length).toBe(1);
  });
});
