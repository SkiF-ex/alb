import React from "react";
import { useEffect, useState } from "react";
import StickerCard from "../molecules/StickerCard";
import StickerPack from "../molecules/StickerPack";
import post from "../../api/post";
import pasteStickers from "../../utils/paste";
import getRandomArrayElement from "../../utils/getRandomArrayElement";
import getCounter from "../../utils/getCounter";
import arrayEdit from "../../utils/arrayEdit";


const Daily = () => {
    const [stickerPacks, setStickerPacks] = useState('');
    const [newStickersOpened, setNewStickersOpened] = useState(false);
    const [newStickerPack, setNewStickersPack] = useState([]);
    const [mock, setMock] = useState([]);

    useEffect(() => {
        getCounter(setStickerPacks, setMock);
    }, [])

    const handleOpen = () => {
        const get_stickers = () => {
            Promise.all([
                fetch('http://localhost:3004/developers'),
                fetch('http://localhost:3004/avatars')])
            .then((response) => Promise.all([response[0].json(), response[1].json()]))
            .then((data) => {
                let team = data[0][0].team;
                const webTeam = team.filter(elem => elem.type === 'web');
                const mobileTeam = team.filter(elem => elem.type === 'mobile');
                const avatars = data[1];

                const newWebProfiles = pasteStickers(webTeam, getRandomArrayElement);
                const newMobileProfiles = pasteStickers(mobileTeam, getRandomArrayElement);

                team = arrayEdit(team, newWebProfiles, avatars);
                team = arrayEdit(team, newMobileProfiles, avatars);

                newStickerPack.splice(0, newStickerPack.length);

                for (let i = 0; i < newWebProfiles.length; i++) {
                    newStickerPack.push(avatars.find((elem) => elem.id === newWebProfiles[i].id))
                    newStickerPack.push(avatars.find((elem) => elem.id === newMobileProfiles[i].id))
                }
                setNewStickersPack(newStickerPack);

                post(team, stickerPacks);
                setNewStickersOpened(true);
            });
        };
        get_stickers();
    }

    const stickerPacksTree = () => {
        return (
        <div className="stickers_window">
            <p className="stickers_header_title">Daily sticker sets</p>
            <p className="stickers_header_subtitle">you have {stickerPacks} sticker sets to open</p>
            <div className="stickers_block">
                {mock.map((elem) => <StickerPack id={elem} handleOpen={handleOpen} />)}
            </div>
        </div>)
    }

    const stickerSetTree = () => {
        return (
        <div className="stickers_window">
            <p className="stickers_header_title">Sticker set has opened</p>
            <p className="stickers_header_subtitle">you have 6 new stickers</p>
            <div className="stickers_block">
                {newStickerPack.map((elem) => <StickerCard sticker={elem}/>)}
            </div>
            <button className="button" onClick={() => {setNewStickersOpened(false); getCounter(setStickerPacks, setMock);}}>Paste</button>
        </div>)
    }

    return (
        <>
            {newStickersOpened ? stickerSetTree() : stickerPacksTree()}
        </>
    )
}

export default Daily;
