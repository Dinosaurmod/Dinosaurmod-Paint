import React from 'react';
import PropTypes from 'prop-types';
import messages from '../../lib/messages.js';
import ToolSelectComponent from '../tool-select-base/tool-select-base.jsx';

import perspectiveIcon from './perspective.svg';

const PerspectiveModeComponent = props => (
    <ToolSelectComponent
        imgDescriptor={messages.perspective}
        imgSrc={perspectiveIcon}
        isSelected={props.isSelected}
        onMouseDown={props.onMouseDown}
        keybinding="P"
    />
);

PerspectiveModeComponent.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onMouseDown: PropTypes.func.isRequired
};

export default PerspectiveModeComponent;
