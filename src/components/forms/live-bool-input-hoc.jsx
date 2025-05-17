import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Higher Order Component to manage inputs that submit on change and <enter>
 * @param {React.Component} Input text input that consumes onChange, onBlur, onKeyPress
 * @returns {React.Component} Live input that calls onSubmit on change and <enter>
 */
export default function (Input) {
    class LiveBoolInput extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'handleChange',
                'handleFlush'
            ]);
            this.state = {
                checked: false
            };
        }
        handleFlush () {
            this.setState({checked: null});
        }
        handleChange (e) {
            if (e.target.checked !== null) {
                this.props.onChange(e.target.checked);
            }
            this.setState({checked: e.target.checked});
        }
        render () {
            const liveValue = this.state.checked === null ? this.props.checked : this.state.checked;
            return (
                <Input
                    {...this.props}
                    checked={liveValue}
                    onBlur={this.handleFlush}
                    onChange={this.handleChange}
                />
            );
        }
    }

    LiveBoolInput.propTypes = {
        onChange: PropTypes.func.isRequired,
        checked: PropTypes.bool
    };

    return LiveBoolInput;
}
