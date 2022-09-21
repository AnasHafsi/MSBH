import React from "react";
import Behance from "../assets/behance.inline.svg";
import Dribbble from "../assets/dribbble.inline.svg";
import Instagram from "../assets/instagram.inline.svg";
import Linkedin from "../assets/linkedin.inline.svg";

function Navigation() {
    return (
        <div className="navigation">
            <div className="row">
                <div className="inPage">
                    <div className="element">
                        <a href="#Project">Project</a>
                    </div>
                    <div className="element">
                        <a href="#About">About</a>
                    </div>
                    <div className="element">
                        <a href="#Resume">Resume</a>
                    </div>
                    <div className="element">
                        <a href="#Contact">Contact</a>
                    </div>
                </div>
                <div className="external">
                    <div className="element">
                        <a>
                            <Instagram />
                        </a>
                    </div>
                    <div className="element">
                        <a>
                            <Linkedin />
                        </a>
                    </div>
                    <div className="element clearfix">
                        <a className="clearfix">
                            <Dribbble className="clearfix" />
                        </a>
                    </div>
                    <div className="element">
                        <a>
                            <Behance />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
