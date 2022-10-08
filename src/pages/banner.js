import React from "react";
import Emojis from "./components/emojis";

function Banner() {
    return (
        <div className="banner">
            <p>
                Hello{" "}
                <Emojis value="waving-hand-medium-light-skin-tone" size="45"></Emojis>{" "}
                I am Insert Name, UX/UI designer from Insert City, Morocco{" "}
                <div style={{ position: 'relative', top: 7 + 'px' }}><Emojis value="flag-morocco" size="45"></Emojis></div>
            </p>
        </div>
    );
}

export default Banner;
