import React from "react";
import { SOCIAL_LINKS } from "../config/social";

const internalLinks = [
    {
        id: 1,
        name: "Project",
        link: "#projects",
    },
    {
        id: 2,
        name: "About",
        link: "#About",
    },
    {
        id: 3,
        name: "Resume",
        link: "#Resume",
    },
    {
        id: 4,
        name: "Contact",
        link: "#Contact",
    },
];

function Navigation() {
    return (
        <div className="navigation">
            <div className="row">
                <div className="inPage">
                    {internalLinks.map((navItem) => (
                        <div className="element" key={navItem.id}>
                            <a href={navItem.link}>{navItem.name}</a>
                        </div>
                    ))}
                </div>
                <div className="external">
                    {SOCIAL_LINKS.map((navItem) => (
                        <div className="element" key={navItem.id}>
                            <a
                                href={navItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${navItem.name} profile`}
                            >
                                {navItem.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
