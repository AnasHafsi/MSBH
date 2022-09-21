import React from "react";
import { isWindows } from "react-device-detect";
const Emoji = (props) => (
    <span
        className={props.useFont && isWindows ? "emojifont" : "emoji"}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Emoji;
