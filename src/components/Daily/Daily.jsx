import { useEffect, useState } from "react";
import StickerCard from "../molecules/StickerCard";
import StickerPack from "../molecules/StickerPack";
import post from "../../api/post";
import pasteStickers from "../../utils/paste";
import getRandomArrayElement from "../../utils/getRandomArrayElement";
import getCounter from "../../utils/getCounter";


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
                fetch('http://localhost:3004/webprofiles'),
                fetch('http://localhost:3004/mobileprofiles'),
                fetch('http://localhost:3004/allocatedMobileTeam'),
                fetch('http://localhost:3004/allocatedWebTeam'),
                fetch('http://localhost:3004/stickers')])
            .then((response) => Promise.all([response[0].json(), response[1].json(), response[2].json(), response[3].json(), response[4].json()]))
            .then((data) => {
                const webTeam = data[0];
                const mobileprofiles = data[1];
                const allocatedMobileTeam = data[2];
                const allocatedWebTeam = data[3];
                const allStickers = data[4];

                const newWebStickers = pasteStickers(allocatedWebTeam, webTeam, getRandomArrayElement);
                const newMobileStickers = pasteStickers(allocatedMobileTeam, mobileprofiles, getRandomArrayElement);
                newStickerPack.splice(0, newStickerPack.length);

                for (let i = 0; i < newWebStickers.length; i++) {
                    newStickerPack.push(allStickers.find((elem) => elem.id === newWebStickers[i].id))
                    newStickerPack.push(allStickers.find((elem) => elem.id === newMobileStickers[i].id))
                }
                setNewStickersPack(newStickerPack);
    
                post(newWebStickers, newMobileStickers, allStickers, stickerPacks);
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