import React from "react";
import PropTypes from "prop-types";

// Native emoji mapping
const emojiMap = {
    "waving-hand-medium-light-skin-tone": "👋🏼",
    "flag-morocco": "🇲🇦",
    "speech-balloon": "💬",
    "call-me-hand-medium-light-skin-tone": "🤙🏼",
    "pinched-fingers-medium-light-skin-tone": "🤌🏼",
    "love-you-gesture-medium-light-skin-tone": "🤟🏼",
};

const Emojis = ({ value, size }) => {
    const emoji = emojiMap[value] || value;

    return (
        <span
            role="img"
            aria-label={value}
            style={{
                fontSize: `${size}px`,
                lineHeight: 1,
                display: 'inline-block'
            }}
        >
            {emoji}
        </span>
    );
};

Emojis.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Emojis;
