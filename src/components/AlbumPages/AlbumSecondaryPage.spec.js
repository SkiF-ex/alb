import React from "react";
import { shallow } from "enzyme";
import AlbumSecondaryPage from "./AlbumSecondaryPage";
import Profile from "../molecules/Profile";

describe('AlbumFirstPage' , () => {
  it('should render', () => {
    const developers = {}
    const component = shallow(<AlbumSecondaryPage Profile={Profile} developers={developers} endpoint={21}/>);
    const wrapper = component.find('.page');

    expect(wrapper.length).toBe(1);
  })
})
