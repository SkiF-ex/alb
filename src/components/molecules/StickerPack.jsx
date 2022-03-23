import React from 'react';

const StickerPack = ({handleOpen}) => {
    return (
    <div className="sticker_pack">
        <div className="sticker_blank">
            <div>
                <p className="sticker_title">trendyol</p>
                <p className="sticker_subtitle">tech</p>
            </div>
            <p className="sticker_set">sticker set</p>
        </div>
        <button className="sticker_button" onClick={handleOpen}>Open</button>
    </div>);
}

export default StickerPack;
