import {GENERATE_WORD, DECREASE_WORD, SET_WAITING, UNSET_WAITING}   from '../constans';

const defaultState = {
    letters: null,
    currLetter: null,
    wordLength: 0,
    isWaiting: false
}

export default (gameWord = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GENERATE_WORD:
            const {startWord, startLetter} = payload;
            return {...gameWord, letters: startWord, wordLength: startWord.length, currLetter: startLetter};

        case DECREASE_WORD:
            const {currWord, currLetter} = payload;
            return {...gameWord, letters: currWord, wordLength: currWord.length, currLetter: currLetter};

        case SET_WAITING:
            return {...gameWord, isWaiting: true};

        case UNSET_WAITING:
            return {...gameWord, isWaiting: false};

        default:
            return gameWord
    }
}