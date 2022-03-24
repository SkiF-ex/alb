import WebTeam from "./WebTeam";
import { useGetDevelopers } from "./hooks/useGetDevelopers";
import React from "react";
import { act, create } from 'react-test-renderer';
import {shallow} from "enzyme";

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({ team: ':web'}),
    Link: ({ children, to }) => <a href={to}> { children } </a>
  }
});
jest.mock('./hooks/useGetDevelopers');

// describe('MobileTeam', () => {
//   beforeEach(() => {
//     jest.mock('react-router-dom', () => {
//       return {
//         useParams: () => ({ team: ':mobile'}),
//         Link: ({ children, to }) => <a href={to}> { children } </a>
//       }
//     });
//     jest.mock('./hooks/useGetDevelopers');
//   })
//
//   it('should render mobile team', () => {
//     useGetDevelopers.mockImplementation(() => [[{
//       avatar: "non-profile.jpg",
//       id: 1,
//       name: "Max",
//       position: "team leader",
//       type: "mobile"
//     }]]);
//
//     let component;
//     act(() => {
//       component = create(
//         <WebTeam />
//       );
//     });
//     expect(component.toJSON()).toMatchSnapshot();
//     expect(useGetDevelopers).toHaveBeenCalled();
//   });
// });

describe('WebTeam component', () => {
  it('should render web team', () => {
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

  it('should press next page button', () => {
    useGetDevelopers.mockImplementation(() => [[{
      avatar: "non-profile.jpg",
      id: 1,
      name: "Max",
      position: "team leader",
      type: "web"
    }]]);

    const component = shallow(<WebTeam endpointProps={0}/>);
    component.find('.button_next').simulate('click');

    expect(component.find('.button_previous').length).toBe(1);
  });

  it('should press previous page button', () => {
    useGetDevelopers.mockImplementation(() => [[{
      avatar: "non-profile.jpg",
      id: 1,
      name: "Max",
      position: "team leader",
      type: "web"
    }]]);

    const component = shallow(<WebTeam endpointProps={0}/>);
    component.find('.button_next').simulate('click');
    component.find('.button_previous').simulate('click');

    expect(component.find('.button_next').length).toBe(1);
  });
});
