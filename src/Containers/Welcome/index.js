import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect}    from 'react-redux';

import BoardGame    from '../BoardGame';
import Btn   from '../../Components/Button';

import {startGame} from '../../AC';

class Welcome extends Component {

    render() {
        const {isGameStart} = this.props;

        const btnStart = !isGameStart ? <Btn text='Старт' callback={this.startGame} /> : null;
        const boardGame = isGameStart ? <BoardGame /> : null;

        return (
            <div className='container pt-3'>
                <div className="row">
                    <div className="col-xs-12">
                        <div className='text-center'>
                            {btnStart}
                        </div>
                    </div>
                    {boardGame}
                </div>
            </div>
        );
    }

    startGame = () => {
        this.props.startGame();
    }
}

Welcome.propTypes = {
    isGameStart: PropTypes.bool.isRequired,
    startGame: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isGameStart: state.game.isGameStart
    }
}

export default connect(mapStateToProps, {startGame})(Welcome);
