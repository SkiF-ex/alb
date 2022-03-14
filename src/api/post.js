const post = async (newWebStickers, newMobileStickers, avatars, stickerPacks) => {
    let responsePacks = await fetch(`http://localhost:3004/packs/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({packs: stickerPacks - 1})
    });
    await responsePacks.json();

    for (let i = 0; i < newWebStickers.length; i++) {
        let responseWebAllocated = await fetch('http://localhost:3004/allocatedWebTeam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWebStickers[i])
        });
        let responseWebProfiles = await fetch(`http://localhost:3004/webprofiles/${newWebStickers[i].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...newWebStickers[i], avatar: avatars.find((elem) => elem.id === newWebStickers[i].id).photo})
        });
        let responseMobileAllocated = await fetch('http://localhost:3004/allocatedMobileTeam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMobileStickers[i])
        });
        let responseMobileProfiles = await fetch(`http://localhost:3004/mobileprofiles/${newMobileStickers[i].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...newMobileStickers[i], avatar: avatars.find((elem) => elem.id === newMobileStickers[i].id).photo})
        });

        await responseWebAllocated.json();
        await responseWebProfiles.json();
        await responseMobileAllocated.json();
        await responseMobileProfiles.json();
    }
}

export default post;