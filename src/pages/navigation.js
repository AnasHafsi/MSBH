import React from "react";

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
                        <a>LinkedIn</a>
                    </div>
                    <div className="element">
                        <a>Dribble</a>
                    </div>
                    <div className="element">
                        <a>Behance</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
