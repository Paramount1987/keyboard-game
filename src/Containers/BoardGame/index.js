import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect}    from 'react-redux';
import {endGame,restartGame, decreaseWord, increaseWrongPoint} from "../../AC";

import KeyLetter    from '../../Components/KeyLetter';
import Timer    from '../../Components/Timer';
import Btn  from '../../Components/Button';

class BoardGame extends Component {

    render() {
        const {
            currLetter,
            letters,
            wordLength,
            wrongPoints,
            endGame,
            isPlaying,
            isWaiting,
            decreaseWord,
            increaseWrongPoint} = this.props;

        const boardBtn = this.generateBtnControl();

        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-xs-12">

                        <KeyLetter
                            word={letters}
                            isPlaying={isPlaying}
                            isWaiting={isWaiting}
                            decreaseWord={decreaseWord}
                            increaseWrongPoint={increaseWrongPoint}
                            currLetter={currLetter}
                        />

                        <Timer callback={endGame} isPlaying={isPlaying} />

                        <div>
                            Кол-во ошибок: {wrongPoints}
                        </div>
                        <div>
                            Осталось символов: {wordLength}
                        </div>

                        <div className='text-center'>
                            {boardBtn}
                        </div>

                    </div>
                </div>

            </div>
        );
    }

    generateBtnControl = () => {
        const {isPlaying, restartGame, endGame} = this.props;

        if (isPlaying) {
           return <Btn text='Закончить' callback={endGame} />;
        }else {
            return <Btn text='Заново' callback={restartGame} />;
        }
    }

}

BoardGame.propTypes = {
    letters: PropTypes.string.isRequired,
    currLetter: PropTypes.string.isRequired,
    wordLength: PropTypes.number.isRequired,
    wrongPoints: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    endGame: PropTypes.func.isRequired,
    restartGame: PropTypes.func.isRequired,
    decreaseWord: PropTypes.func.isRequired,
    increaseWrongPoint: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        letters: state.word.letters,
        currLetter: state.word.currLetter,
        wordLength: state.word.wordLength,
        wrongPoints: state.game.wrongPoints,
        isPlaying: state.game.isPlaying,
        isWaiting: state.word.isWaiting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endGame: () => dispatch(endGame()),
        restartGame: () => dispatch(restartGame()),
        increaseWrongPoint: () => dispatch(increaseWrongPoint()),
        decreaseWord: (word) => dispatch(decreaseWord(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardGame);
