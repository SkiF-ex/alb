const arrayEdit = (team, profiles, avatars) => {
    for (let i = 0; i < profiles.length; i++) {
        console.log('team', team)
        console.log('profiles', profiles);
        console.log('team.indexOf(profiles[i])', team.indexOf(profiles[i]))
        team[team.indexOf(profiles[i])].avatar = avatars.find(elem => elem.id === profiles[i].id).photo;
    }
    return team;
}

export default arrayEdit;
