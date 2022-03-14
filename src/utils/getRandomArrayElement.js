const getRandomArrayElement = (developers, allocated, newStickers) => {
    const randomEl = Math.floor(Math.random()*developers.length);

    for (let i = 0; i < allocated.length; i++) {
        if (developers[randomEl].id === allocated[i].id ) {
            return false;
        };
    };

    for (let i = 0; i < newStickers.length; i++) {
        if (developers[randomEl].id === newStickers[i].id) {
            return false;
        };
    };
    return developers[randomEl];
};

export default getRandomArrayElement;