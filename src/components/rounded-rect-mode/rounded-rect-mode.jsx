import React from 'react';
import PropTypes from 'prop-types';
import messages from '../../lib/messages.js';
import ToolSelectComponent from '../tool-select-base/tool-select-base.jsx';

// import roundedRectIcon from './rounded-rectangle.svg';
import RectIcon from './rectangle.svg';

const RoundedRectModeComponent = props => (
    <ToolSelectComponent
        imgDescriptor={messages.rect}
        imgSrc={RectIcon}
        isSelected={props.isSelected}
        onMouseDown={props.onMouseDown}
    />
);

RoundedRectModeComponent.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onMouseDown: PropTypes.func.isRequired
};

export default RoundedRectModeComponent;
