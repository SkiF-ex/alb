import React from "react";
import Homepage from "../Homepage";
import WebTeam from "../WebTeam/WebTeam";
import './TeamChoose.css';
import {DATA_MOCK_MOBILE_TEAM, DATA_MOCK_WEB_TEAM} from "./mock";

const TeamChoose = ({handlePage}) => {
    return (
        <>
            <button className="button_item button_previous" onClick={() => handlePage(<Homepage handlePage={handlePage}/>)} />
            <section id="webTeam">
                <div className="page">
                    <div className="coose_block">
                        <p>WEB TEAM</p>
                        <p>ALBUM</p>
                        <button className="choose_button web" onClick={() => handlePage(<WebTeam handlePage={handlePage} team={'web'} dataMock={DATA_MOCK_WEB_TEAM}/>)}>Open</button>
                    </div>
                </div>
                <div className="page">
                    <div className="coose_block">
                        <p>MOBILE TEAM</p>
                        <p>ALBUM</p>
                        <button className="choose_button mobile" onClick={() => handlePage(<WebTeam handlePage={handlePage} team={'mobile'} dataMock={DATA_MOCK_MOBILE_TEAM}/>)}>Open</button>
                    </div>
                </div>
            </section>
            <button className="button_hidden button_item" />
        </>
    );
}

export default TeamChoose;
