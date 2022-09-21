import React from "react";
import Emoji from "./utils/emoji";

function Banner() {
    return (
        <div className="banner">
            <p>
                Hello{" "}
                <Emoji
                    symbol="👋🏼"
                    label="Waving Hand Medium Light Skin Tone"
                    alt="Waving Hand Medium Light Skin Tone"
                />{" "}
                I am Public Repository, UX/UI designer from Casablanca Morocco{" "}
                <Emoji symbol="🇲🇦" useFont="true" label="Moroccan Flag" />
            </p>
        </div>
    );
}

export default Banner;
