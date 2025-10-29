import React from "react";
import Logo from "../assets/logo.inline.svg";
function Header() {
    return (
        <div className="header">
            <div className="v-center">
                <div className="elements row">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                    <div className="start">
                        <a href="#Contact" className="button">start a project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
