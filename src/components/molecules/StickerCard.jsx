import React from 'react';

const StickerCard = ({sticker}) => {
    return (            
    <div className="sticker_item">
        <img src={`images/${sticker.photo}`} className="profile_avatar" alt="profile"/>
    </div>);
}

export default StickerCard;
