import WebTeam from "./WebTeam";
import { useParams } from "react-router-dom";

jest.mock('react-router-dom', () => {
  return { useParams: () => ({ team: ':web' })}
});

import React from "react";
import {DATA_MOCK_MOBILE_TEAM} from "../TeamChoose/mock";
import { act, create } from 'react-test-renderer';

describe('WebTeam component', () => {
  it('should render component', () => {
    let component;
    act(() => {
      component = create(
        <WebTeam dataMock={DATA_MOCK_MOBILE_TEAM} />
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
