import {useEffect, useState} from "react";

export const useGetDevelopers = (team) => {
  const [developers, setDevelopers] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3004/developers`).then((response) => response.json()).then((data) => setDevelopers(data[0].team.filter(elem => elem.type === team)));
  }, []);

  return [ developers ]
}
