import React from "react";

const AlbumFirstPage = ({info, Profile, developers}) => {
    return (
        <div className="page">
            <div className="album_header">
                <div className="team_logo"><p>TEAM LOGO</p></div>
                <div className="team_info">
                    <p className="head_title">{info.title}</p>
                    <p className="head_item">{info.subtitle}</p>
                    <p className="head_info">{info.description}</p>
                    <p className="head_info">{info.subdescription}</p>
                </div>
            </div>
            <div className="developers team_leaders">
                <Profile firstPoz={0} secondPoz={2} developers={developers}/>
            </div>
            <div className="developers">
                <Profile firstPoz={2} secondPoz={5} developers={developers}/>
            </div>
        </div>
    )
}

export default AlbumFirstPage;
