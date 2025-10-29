import React from "react";
import Email from "../assets/email.inline.svg";
import { PROFILE } from "../config/profile";

function Footer() {
    const [copied, setCopied] = React.useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(PROFILE.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch((err) => {
            console.error('Failed to copy email:', err);
        });
    };

    return (
        <div className="footer">
            <div className="row">
                <button
                    onClick={copyEmail}
                    aria-label={`Copy email address: ${PROFILE.email}`}
                    title={`Copy: ${PROFILE.email}`}
                >
                    <div className="email">
                        <Email />
                        <div className="text">{copied ? 'Copied!' : 'Copy e-mail!'}</div>
                    </div>
                </button>
                <div className="credits">MSBH Square © 2022. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;
