import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Button }   from 'react-bootstrap';

class CustomButton extends Component {
    render() {
        const { text, callback } = this.props;
        return (
            <Button bsStyle='primary' bsSize="large" onClick= {callback}>
                {text}
            </Button>
        );
    }
}

CustomButton.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
};
CustomButton.defaultProps = {
    text: 'Кнопка'
};

export default CustomButton;
