import React from "react";
import { shallow } from "enzyme";
import AlbumFirstPage from "./AlbumFirstPage";
import Profile from "../molecules/Profile";

describe('AlbumFirstPage' , () => {
  it('should render', () => {
    const info = {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
      subdescription: 'subdescription'
    }
    const developers = {}
    const component = shallow(<AlbumFirstPage info={info} Profile={Profile} developers={developers}/>);
    const wrapper = component.find('.page');

    expect(wrapper.length).toBe(1);
  })
})
