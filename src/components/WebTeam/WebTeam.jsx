import Profile from "../molecules/Profile";
import AlbumFirstPage from "../AlbumPages/AlbumFirstPage";
import { useEffect, useState } from "react";
import './WebTeam.css'
import AlbumSecondaryPage from "../AlbumPages/AlbumSecondaryPage";
import TeamChoose from "../TeamChoose/TeamChoose";

const WebTeam = ({handlePage, team, dataMock}) => {
    const [developers, setDevelopers] = useState('');
    const [page, setPage] = useState(1);
    const [endpoint, setEndpoint] = useState(14);

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
        return <button className="button_item button_previous" onClick={() => page < 2 ? handlePage(<TeamChoose handlePage={handlePage}/>) : handlePager(false)}></button>
    }

    return (
        <>
            {leftButtonSwitch(page)}
            <section id="webTeam">
                {isPage(page)}
            </section>
            {endpoint >= developers.length ? <button className="button_hidden button_item"></button> : <button className="button_item" onClick={() =>  handlePager(true)}></button>}
        </>

    );
}

export default WebTeam;