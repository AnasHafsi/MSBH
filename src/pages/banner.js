import React from "react";
import Emojis from "../components/Emojis";
import { PROFILE } from "../config/profile";

function Banner() {
    return (
        <div className="banner">
            <p>
                Hello{" "}
                <Emojis value="waving-hand-medium-light-skin-tone" size="45"></Emojis>{" "}
                I am {PROFILE.name}, {PROFILE.title} from {PROFILE.city}, Morocco{" "}
                <span className="flag-emoji"><Emojis value="flag-morocco" size="45"></Emojis></span>
            </p>
        </div>
    );
}

export default Banner;
