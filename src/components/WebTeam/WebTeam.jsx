import React from 'react';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Profile from "../molecules/Profile";
import AlbumFirstPage from "../AlbumPages/AlbumFirstPage";
import AlbumSecondaryPage from "../AlbumPages/AlbumSecondaryPage";
import {DATA_MOCK_MOBILE_TEAM, DATA_MOCK_WEB_TEAM} from "../TeamChoose/mock";
import './WebTeam.css'

const WebTeam = () => {
    const teamParams = useParams()
    const team = teamParams.team.slice(1)
    const [developers, setDevelopers] = useState('');
    const [page, setPage] = useState(1);
    const [endpoint, setEndpoint] = useState(14);

    const dataMock = team === 'web' ? DATA_MOCK_WEB_TEAM : DATA_MOCK_MOBILE_TEAM;

    useEffect(() => {
        fetch(`http://localhost:3004/developers`).then((response) => response.json()).then((data) => setDevelopers(data[0].team.filter(elem => elem.type === team)));
    }, []);

    const handlePager = (state) => {
        return state ? (setPage(page + 1), setEndpoint(endpoint + 18)) : (setPage(page - 1), setEndpoint(endpoint - 18));
    }

    const isPage = (page) => {
        return page < 2 ? <>
                <AlbumFirstPage info={dataMock} Profile={Profile} developers={developers}/>
                <AlbumSecondaryPage Profile={Profile} developers={developers} endpoint={endpoint}/>
            </> : <>
                <AlbumSecondaryPage Profile={Profile} developers={developers} endpoint={endpoint - 9}/>
                <AlbumSecondaryPage Profile={Profile} developers={developers} endpoint={endpoint}/>
            </>
    }

    const leftButtonSwitch = (page) => {
        return page < 2 ? <Link to="/team" className="button_item button_previous"><button className="button_item" /></Link> : <button className="button_item button_previous" onClick={() => handlePager(false)} />
    }

    return (
        <>
            {leftButtonSwitch(page)}
            <section id="webTeam">
                {isPage(page)}
            </section>
            {endpoint >= developers.length ? <button className="button_hidden button_item button_next" /> : <button className="button_item button_next" onClick={() => handlePager(true)} />}
        </>

    );
}

export default WebTeam;
