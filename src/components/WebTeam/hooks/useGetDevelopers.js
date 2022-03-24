import React from "react";

export const useGetDevelopers = (team) => {
  const [developers, setDevelopers] = React.useState('');

  React.useEffect(() => {
    fetch(`http://localhost:3004/developers`).then((response) => response.json()).then(response => {console.log('resp',response);return response}).then((data) => setDevelopers(data[0].team.filter(elem => elem.type === team)));
  }, []);

  console.log('developers', developers);
  return [ developers ]
}
