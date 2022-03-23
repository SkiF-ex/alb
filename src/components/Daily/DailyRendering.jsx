import React from "react";
import {useEffect, useState} from "react";
import StickerCard from "../molecules/StickerCard";
import StickerPack from "../molecules/StickerPack";
import getCounter from "../../utils/getCounter";


export const DailyRendering = ({ useGetStickers }) => {
  const [
    getStickers,
    stickerPacks,
    setStickerPacks,
    newStickerPack,
    newStickersOpened,
    setNewStickersOpened,
  ] = useGetStickers();
  const [mock, setMock] = useState([]);

  useEffect(() => {
    getCounter(setStickerPacks, setMock);
  }, [])

  const stickerPacksTree = () => {
    return (
      <div className="stickers_window">
        <p className="stickers_header_title">Daily sticker sets</p>
        <p className="stickers_header_subtitle">you have {stickerPacks} sticker sets to open</p>
        <div className="stickers_block">
          {mock.map((elem) => <StickerPack id={elem} handleOpen={getStickers}/>)}
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
        <button className="button" onClick={() => {
          setNewStickersOpened(false);
          getCounter(setStickerPacks, setMock);
        }}>Paste
        </button>
      </div>)
  }

  return (
    <>
      {newStickersOpened ? stickerSetTree() : stickerPacksTree()}
    </>
  )
}
