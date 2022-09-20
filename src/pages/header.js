import React from "react";
import Logo from "../assets/logo.inline.svg";

function Header() {
    return (
        <div className="Header">
            <div className="elements row">
                <div className="logo">
                    <Logo></Logo>
                </div>
                <div className="start">
                    <button>
                        <a href="#">start a project</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
