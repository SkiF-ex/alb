const pasteStickers = (team, getRandomArrayElement) => {
    const newStickers = [];
    const freeProfiles = team.filter(elem => elem.avatar === 'non-profile.jpg');
    const usedProfiles = team.filter(elem => elem.avatar !== 'non-profile.jpg');

    let countOfProfiles;

    if (freeProfiles.length === 0) {
        return;
    };

    if (team.length - usedProfiles.length > 3) {
        countOfProfiles = 3;
    } else {
        countOfProfiles = team.length - usedProfiles.length;
    };
    
    while (newStickers.length < countOfProfiles) {
        const profile = getRandomArrayElement(freeProfiles);
        newStickers.push(profile);
    }
    return newStickers;
}

export default pasteStickers;