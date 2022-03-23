import React from 'react';
import { shallow } from "enzyme";
import StickerCard from "./StickerCard";

describe('StickerCard component', () => {
  it('should correct render', () => {
    const sticker = [{id: 1, photo: 'av1'}]
    const component = shallow(<StickerCard sticker={sticker}/>);
    const wrapper = component.find(".sticker_item");

    expect(wrapper.length).toBe(1);
  });
});
