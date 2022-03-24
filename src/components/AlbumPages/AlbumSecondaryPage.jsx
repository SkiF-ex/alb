import React from "react";

const AlbumSecondaryPage = ({Profile, developers, endpoint}) => {
    return (
        <div className="page">
            <div className="developers">
                <Profile firstPoz={endpoint - 9} secondPoz={endpoint} developers={developers}/>
            </div>
        </div>
    );
}

export default AlbumSecondaryPage;
