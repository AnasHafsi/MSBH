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

// Convert emoji to Twemoji codepoint
const emojiToCodepoint = (emoji) => {
    if (!emoji) return '';
    const codepoints = [];
    for (let i = 0; i < emoji.length; i++) {
        const code = emoji.codePointAt(i);
        if (code) {
            codepoints.push(code.toString(16));
            // Skip the next character if it's a surrogate pair
            if (code > 0xffff) i++;
        }
    }
    return codepoints.join('-');
};

const Emojis = ({ value, size }) => {
    if (!value) return null;

    const emoji = emojiMap[value] || value;
    const codepoint = emojiToCodepoint(emoji);

    if (!codepoint) return null;

    const twemojiUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codepoint}.svg`;

    return (
        <img
            src={twemojiUrl}
            alt={value}
            role="img"
            aria-label={value}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: 'inline-block',
                verticalAlign: 'middle'
            }}
        />
    );
};

Emojis.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Emojis;
