import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {MIXED} from '../../helper/style-path';

import noFillIcon from './no-fill.svg';
import mixedFillIcon from './mixed-fill.svg';
import styles from './color-button.css';
import GradientTypes from '../../lib/gradient-types';
import log from '../../log/log';

const colorToBackground = (color, color2, gradientType, colorStop, color2Stop) => {
    if (color === MIXED || (gradientType !== GradientTypes.SOLID && color2 === MIXED)) return 'white';
    if (color === null) color = 'white';
    if (color2 === null) color2 = 'white';
    if (!colorStop) colorStop = '0';
    if (!color2Stop) color2Stop = '100';
    const colorStructure = `${color} ${colorStop}%, ${color2} ${color2Stop}%`
    switch (gradientType) {
    case GradientTypes.SOLID: return color;
    case GradientTypes.HORIZONTAL: return `linear-gradient(to right, ${colorStructure})`;
    case GradientTypes.VERTICAL: return `linear-gradient(${colorStructure})`;
    case GradientTypes.RADIAL: return `radial-gradient(${colorStructure})`;
    default: log.error(`Unrecognized gradient type: ${gradientType}`);
    }
};

const ColorButtonComponent = props => (
    <div
        className={styles.colorButton}
        onClick={props.onClick}
    >
        <div
            className={classNames(styles.colorButtonSwatch, {
                [styles.outlineSwatch]: props.outline && !(props.color === MIXED)
            })}
            style={{
                background: colorToBackground(props.color, props.color2, props.gradientType, props.colorStop, props.color2Stop)
            }}
        >
            {props.color === null && (props.gradientType === GradientTypes.SOLID || props.color2 === null) ? (
                <img
                    className={styles.swatchIcon}
                    draggable={false}
                    src={noFillIcon}
                />
            ) : ((props.color === MIXED || (props.gradientType !== GradientTypes.SOLID && props.color2 === MIXED) ? (
                <img
                    className={styles.swatchIcon}
                    draggable={false}
                    src={mixedFillIcon}
                />
            ) : null))}
        </div>
        <div className={styles.colorButtonArrow}>▾</div>
    </div>
);

ColorButtonComponent.propTypes = {
    color: PropTypes.string,
    color2: PropTypes.string,
    colorStop: PropTypes.number,
    color2Stop: PropTypes.number,
    gradientType: PropTypes.oneOf(Object.keys(GradientTypes)).isRequired,
    onClick: PropTypes.func.isRequired,
    outline: PropTypes.bool.isRequired
};

ColorButtonComponent.defaultProps = {
    outline: false
};

export default ColorButtonComponent;
