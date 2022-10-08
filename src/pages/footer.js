import React from "react";
import Email from "../assets/email.inline.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <a onClick={() => { navigator.clipboard.writeText("email to copy") }}>
                    <div className="email">
                        <Email />
                        <div className="text">Copy e-mail!</div>
                    </div>
                </a>
                <div className="credits">MSBH Square © 2022. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;
