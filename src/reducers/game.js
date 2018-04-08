import {START_GAME, RESTART_GAME, END_GAME, INCREASE_WRONG_POINT}   from '../constans';

const defaultState = {
    isGameStart: false,
    isPlaying: false,
    wrongPoints: 0
}

export default (gameState = defaultState, action) => {
    const {type} = action;

    switch (type) {
        case START_GAME:
            return {...gameState, isPlaying: true, isGameStart: true};

        case RESTART_GAME:
            return {...gameState, isPlaying: true, wrongPoints: 0};

        case END_GAME:
            return {...gameState, isPlaying: false};

        case INCREASE_WRONG_POINT:
            return {...gameState, wrongPoints: gameState.wrongPoints + 1};

        default:
            return gameState;
    }
}