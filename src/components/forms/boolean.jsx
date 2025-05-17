import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './boolean.css';

const Input = props => {
    const {small, range, ...componentProps} = props;
    return (
        <input
            type="checkbox"
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
    range: PropTypes.bool,
    small: PropTypes.bool
};

Input.defaultProps = {
    range: false,
    small: false
};

export default Input;
