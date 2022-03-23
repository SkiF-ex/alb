import pasteStickers from "./paste";
import getRandomArrayElement from "./getRandomArrayElement";

describe('Paste.js util', () => {
    it('should return array', () => {
        const team = [{avatar: 'non-profile.jpg'}];
        expect(pasteStickers(team, getRandomArrayElement)).toStrictEqual([{avatar: 'non-profile.jpg'}])
    });

    it('should return undefined', () => {
        expect(pasteStickers([], getRandomArrayElement)).toEqual(undefined)
    });

    it('should return array length 3', () => {
        const team = [
            {avatar: 'av1'},
            {avatar: 'non-profile.jpg'},
            {avatar: 'non-profile.jpg'},
            {avatar: 'non-profile.jpg'},
            {avatar: 'non-profile.jpg'}
        ];
        expect(pasteStickers(team, getRandomArrayElement).length).toEqual(3)
    });
})
