import React from "react";
import { MemoryRouter } from "react-router-dom";
import TeamChoose from "./TeamChoose";
import { act, create } from 'react-test-renderer';

describe('TeamChoose component', () => {

  it('should render component', () => {
    let component;

    act(() => {
      component = create(
        <MemoryRouter>
          <TeamChoose />
        </ MemoryRouter>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
})
