import React from "react";
import { Link } from "react-router-dom";

import './TeamChoose.css';

const TeamChoose = () => {
    return (
        <>
            <Link to="/" className="button_item button_previous">
                <button className="button_item"/>
            </Link>
            <section id="webTeam">
                <div className="page">
                    <div className="coose_block">
                        <p>WEB TEAM</p>
                        <p>ALBUM</p>
                        <Link to="/our_team:web">
                          <button className="choose_button web">Open</button>
                        </Link>
                    </div>
                </div>
                <div className="page">
                    <div className="coose_block">
                        <p>MOBILE TEAM</p>
                        <p>ALBUM</p>
                        <Link to="/our_team:mobile">
                          <button className="choose_button mobile" >Open</button>
                        </Link>
                    </div>
                </div>
            </section>
            <button className="button_hidden button_item" />
        </>
    );
}

export default TeamChoose;
