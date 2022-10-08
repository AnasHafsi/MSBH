import React from "react";
import WavingHand from "../assets/wavingHand.inline.svg";
import Morocco from "../assets/morocco.inline.svg";

function Banner() {
    return (
        <div className="banner">
            <p>
                Hello{" "}
                <WavingHand key={1}/>{" "}
                I am Public Repository, UX/UI designer from Casablanca Morocco{" "}
                <Morocco key={2}/>
            </p>
        </div>
    );
}

export default Banner;
