import React, {Component} from 'react';
import PropTypes from 'prop-types';

import moment   from 'moment';

class Timer extends Component {
    state = {
        elapsed: 0,
        expired: 60
    }

    componentDidMount () {
        if(this.props.isPlaying) {
            this.startTimer();
        }
    }

    componentDidUpdate () {
        if (this.state.elapsed === this.state.expired) {
            this.stopTimer();
        }
    }

    componentWillReceiveProps (nextProps) {
        const {isPlaying} = this.props;

        if (!nextProps.isPlaying) {
            return this.stopTimer();
        }

        if(!isPlaying && nextProps.isPlaying) {
            this.startTimer('restart');
        }
    }

    render() {
        const { expired, elapsed } = this.state;

        return (
            <div>
                <div>Осталось времени: {expired - elapsed}</div>
                <div>Прошло времени: {elapsed}</div>
            </div>
        );
    }

    startElapsedTimer = () => {
        this.setState({
            elapsed: moment(new Date() - this.date).seconds()
        });
    }

    startTimer = (restart) => {
        this.date = Date.now();

        if (restart) {
            this.setState(prevState => {
                return {
                    elapsed: 0
                }
            });
        }

        this.timerHolder = setInterval( this.startElapsedTimer, 100);
    }

    stopTimer = () => {
        clearInterval(this.timerHolder);
        this.props.callback();
    }
}

Timer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    callback: PropTypes.func
};

export default Timer;
