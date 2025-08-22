import paper from 'dinosaurmod-paper';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import Modes from '../lib/modes';
import ColorStyleProptype from '../lib/color-style-proptype';
import {changeMode} from '../reducers/modes';
import {MIXED} from '../helper/style-path';

import {clearSelection, getSelectedLeafItems} from '../helper/selection';
import PerspectiveTool from '../helper/tools/perspective-tool.js';
import PerspectiveModeComponent from '../components/perspective-mode/perspective-mode.jsx';

class PerspectiveMode extends React.Component {
    render () {
        return (
            <PerspectiveModeComponent
                isSelected={this.props.isPerspectiveModeActive}
                onMouseDown={this.props.handleMouseDown}
            />
        );
    }
}

PerspectiveMode.propTypes = {
    handleMouseDown: PropTypes.func.isRequired,
    isPerspectiveModeActive: PropTypes.bool.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.instanceOf(paper.Item)),
    setSelectedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isPerspectiveModeActive: state.scratchPaint.mode === Modes.PERSPECTIVE
});
const mapDispatchToProps = dispatch => ({
    handleMouseDown: () => {
        dispatch(changeMode(Modes.PERSPECTIVE));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerspectiveMode);