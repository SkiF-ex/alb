import Daily from "./Daily";
import { act, create } from 'react-test-renderer';

import React from "react";

describe('Daily component', () => {

  it('should render component', () => {
    let component;
    act(() => {
      component = create(
        <Daily />
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
})
