import { ALPHABET } from '../constans';

export function generateWord (length = 5) {
    const lengthAlphabet = ALPHABET.length - 1;
    let word = '';

    for (let i = 0; i < length; i++) {
        word += ALPHABET.charAt( Math.round(Math.random() * lengthAlphabet) );
    }

    return word;
}