import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './boolean.css';

const Input = props => {
    const {small, range, checked, onChange, style, ...componentProps} = props;
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            style={style}
            {...componentProps}
            className={classNames(
                styles.inputBoolean,
                props.className,
                {
                    [styles.inputSmall]: small && !range,
                    [styles.inputSmallRange]: small && range
                }
            )}
        />
    );
};

Input.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    range: PropTypes.bool,
    small: PropTypes.bool,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
    range: false,
    small: false,
    checked: false,
    style: {}
};

export default Input;
