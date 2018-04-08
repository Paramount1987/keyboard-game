import {
    START_GAME,
    RESTART_GAME,
    END_GAME,
    GENERATE_WORD,
    INCREASE_WRONG_POINT,
    DECREASE_WORD,
    SET_WAITING,
    UNSET_WAITING
} from "../constans";

import {generateWord} from "../utils";

export function startGame() {
    return (dispatch) => {
        dispatch({
            type: START_GAME
        });

        const word = generateWord(25);

        dispatch({
            type: GENERATE_WORD,
            payload: {startWord: word, startLetter: word.charAt(0)}
        })
    }
}

export function restartGame() {
    return (dispatch) => {
        dispatch({
            type: RESTART_GAME
        });

        const word = generateWord(25);

        dispatch({
            type: GENERATE_WORD,
            payload: {startWord: word, startLetter: word.charAt(0)}
        })
    }
}

export function endGame() {
    return {
        type: END_GAME
    }
}

export function increaseWrongPoint() {

    return (dispatch) => {
        dispatch({
            type: SET_WAITING
        });
        setTimeout(() => {
            dispatch({
                type: UNSET_WAITING
            });
        }, 100);

        dispatch({
            type: INCREASE_WRONG_POINT
        })
    };
}

export function decreaseWord(word) {
    const newWord = word.slice(1);
    const letter = newWord.charAt(0);

    return (dispatch) => {

        dispatch({
            type: SET_WAITING
        });
        setTimeout(() => {
            dispatch({
                type: UNSET_WAITING
            });
        }, 150);

        dispatch({
            type: DECREASE_WORD,
            payload: {currWord: newWord, currLetter: letter}
        });

        if (!newWord.length) {
            dispatch({
                type: END_GAME
            });
        }
    }
}
