import WebTeam from "./WebTeam";
import { useGetDevelopers } from "./hooks/useGetDevelopers";

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({ team: ':web'}),
    Link: ({ children, to }) => <a href={to}> { children } </a>
  }
});
jest.mock('./hooks/useGetDevelopers');

import React from "react";
import { act, create } from 'react-test-renderer';

describe('WebTeam component', () => {
  it('should render component', () => {
    useGetDevelopers.mockImplementation(() => [[{
      avatar: "non-profile.jpg",
      id: 1,
      name: "Max",
      position: "team leader",
      type: "web"
    }]]);

    let component;
    act(() => {
      component = create(
        <WebTeam />
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
    expect(useGetDevelopers).toHaveBeenCalled();
  });
});
