const post = async (team, stickerPacks) => {
    let responsePacks = await fetch(`http://localhost:3004/packs/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({packs: stickerPacks - 1})
    });
    await responsePacks.json();

    let responseTeam = await fetch(`http://localhost:3004/developers/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({team: team})
    });
    await responseTeam.json();
}

export default post;