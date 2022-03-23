export const teamRequest = async (team) => {
  let responseTeam = await fetch(`http://localhost:3004/developers/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({team: team})
  });
  await responseTeam.json();
}
