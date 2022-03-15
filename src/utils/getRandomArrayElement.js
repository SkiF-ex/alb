const getRandomArrayElement = (developers) => {
    const randomEl = Math.floor(Math.random()*developers.length);
    return developers[randomEl];
};

export default getRandomArrayElement;