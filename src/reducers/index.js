import {combineReducers}    from 'redux';
import game from './game';
import word from './word';

export default combineReducers({
    game,
    word
});