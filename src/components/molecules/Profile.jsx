const Profile = ({firstPoz, secondPoz, developers}) => {
    if (developers) {
        const profiles = developers.slice(firstPoz, secondPoz);

        return profiles.map((elem) => {
            return (
                <div key={elem.id} className="profile">
                    <img src={`images/${elem.avatar}`} className="profile_avatar" alt="profile"/>
                    <p className="profile_name">{elem.name}</p>
                    <p className="profile_position">{elem.position}</p>
                    <p className="profile_stat">2 YR</p>
                </div>
            )
        });
    }

    return <></>
};

export default Profile;