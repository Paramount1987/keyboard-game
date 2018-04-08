import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Panel, ButtonGroup, ButtonToolbar, Button }    from 'react-bootstrap';

class KeyLetter extends Component {
    constructor(props) {
        super(props);
        document.addEventListener('keydown', this.onKeyDown);

        this.state = {
            answerType: null
        }
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render () {
        const {answerType} = this.state;
        const { word, currLetter, isPlaying, isWaiting } = this.props;
        const headerTitle = isPlaying ? 'Игра началась' : 'Игра закончена';
        const btnClass = isWaiting ? answerType : 'default';

        const BtnWord = word.split('').map((item, i) => {
            if (!i) return;
            return <Button key={i}>{item}</Button>
        });
        const BtnFirstLetter = currLetter.length ? <Button bsStyle={btnClass}>{currLetter}</Button> : null;

        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{headerTitle}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>

                        <ButtonToolbar>
                            <ButtonGroup>
                                {BtnFirstLetter}
                                {BtnWord}
                            </ButtonGroup>
                        </ButtonToolbar>

                    </Panel.Body>
                </Panel>
            </div>
        );
    }

    onKeyDown = (evt) => {
        const { isPlaying,
                word,
                currLetter,
                decreaseWord,
                increaseWrongPoint} = this.props;

        if (!isPlaying) return;

        if (evt.key.toUpperCase() === currLetter) {
            this.setState(prevState => {
                return {answerType: 'success'}
            });
            decreaseWord(word);
        } else {
            this.setState(prevState => {
                return {answerType: 'danger'}
            });
            increaseWrongPoint();
        }
    }
}

KeyLetter.propTypes = {
    word: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    increaseWrongPoint: PropTypes.func.isRequired,
    decreaseWord: PropTypes.func.isRequired
};
KeyLetter.defaultProps = {
    word: ''
};

export default KeyLetter;
