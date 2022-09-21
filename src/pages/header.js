import React from "react";
import Logo from "../assets/logo.inline.svg";
import { isWindows } from "react-device-detect";
function Header() {
    return (
        <div className="header">
            <div className="v-center">
                <div className="elements row">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                    <div className="start">
                        <button>
                            <a href="#header">start a project</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
