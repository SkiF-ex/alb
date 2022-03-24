import React from 'react';
import fetchMock from 'fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks'

import { useGetDevelopers } from "./useGetDevelopers";

describe('getStickers', () => {
  it('should return functions', async () => {
    const mockedDevelopers = () => {
      return [{
        id: 1,
        team: [
          {
            id: 1,
            name: "Max",
            position: "team leader",
            avatar: "non-profile.jpg",
            type: "web"
          },
          {
            id: 2,
            name: "Maxim",
            position: "tech leader",
            avatar: "non-profile.jpg",
            type: "mobile"
          }
        ]
      }]
    };

    fetchMock.get('http://localhost:3004/developers', mockedDevelopers);
    renderHook( () => useGetDevelopers('web'))

    const url = fetchMock.lastUrl()
    expect(url).toEqual('http://localhost:3004/developers');
  })
})
