import React from 'react';
import { shallow } from "enzyme";
import StickerPack from "./StickerPack";

describe('StickerPack component', () => {
  it('should correct render', () => {
    const handleOpenMock = jest.fn();
    const component = shallow(<StickerPack id={1} handleOpen={handleOpenMock}/>);
    const wrapper = component.find(".sticker_pack");

    expect(wrapper.length).toBe(1);
  });
});
