const pasteStickers = (allocated, team, getRandomArrayElement) => {
    const newStickers = [];
    let countOfProfiles;

    if (allocated.length === team.length) {
        return;
    };
    if (allocated.length > 11) {
        countOfProfiles = team.length - allocated.length;
    } else {
        countOfProfiles = 3;
    };
    while (newStickers.length < countOfProfiles) {
        const profile = getRandomArrayElement(team, allocated, newStickers);
        if (profile !== false) {
            newStickers.push(profile);
        }
    }
    return newStickers;
}

export default pasteStickers;