const arrayEdit = (team, profiles, avatars) => {
    for (let i = 0; i < profiles.length; i++) {
        team[team.indexOf(profiles[i])].avatar = avatars.find(elem => elem.id === profiles[i].id).photo;
    }
    return team;
}

export default arrayEdit;
