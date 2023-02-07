import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ text, style, onClick }) => {
    return (
        <div
            onClick = {onClick}
            style = {style}
            className = {`button`}
        >
            <h2 className = {`buttonText`}>{text}</h2>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
}

export { Button };