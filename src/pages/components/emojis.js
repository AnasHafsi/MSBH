import React from "react";
import PropTypes from "prop-types";
import { Emoji } from 'react-apple-emojis';

const Emojis = ({ value, size }) => (
    <Emoji name={value} width={size} />
);

Emojis.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default Emojis;
