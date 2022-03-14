const StickerCard = ({sticker}) => {
    return (            
    <div key={sticker.id} className="sticker_item">
        <img src={`images/${sticker.photo}`} className="profile_avatar" alt="profile"/>
    </div>);
}

export default StickerCard;