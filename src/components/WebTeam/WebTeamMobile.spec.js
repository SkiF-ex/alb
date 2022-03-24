import WebTeam from "./WebTeam";
import { useGetDevelopers } from "./hooks/useGetDevelopers";
import React from "react";
import { act, create } from 'react-test-renderer';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({ team: ':mobile'}),
    Link: ({ children, to }) => <a href={to}> { children } </a>
  }
});
jest.mock('./hooks/useGetDevelopers');

describe('MobileTeam', () => {
  it('should render mobile team', () => {
    useGetDevelopers.mockImplementation(() => [[{
      avatar: "non-profile.jpg",
      id: 1,
      name: "Max",
      position: "team leader",
      type: "mobile"
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
