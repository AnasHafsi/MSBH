import React from "react";
import Behance from "../assets/behance.inline.svg";
import Dribbble from "../assets/dribbble.inline.svg";
import Instagram from "../assets/instagram.inline.svg";
import Linkedin from "../assets/linkedin.inline.svg";

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
const externalLinks = [
    {
        id: 1,
        name: "Behance",
        link: "https://behance.com",
        icon: <Behance />,
    },
    {
        id: 2,
        name: "Instagram",
        link: "https://Instagram.com",
        icon: <Instagram />,
    },
    {
        id: 3,
        name: "Dribbble",
        link: "https://Dribbble.com",
        icon: <Dribbble />,
    },
    {
        id: 4,
        name: "LinkedIn",
        link: "https://LinkedIn.com",
        icon: <Linkedin />,
    },
];

function Navigation() {
    return (
        <div className="navigation">
            <div className="row">
                <div className="inPage">
                    {internalLinks.map((navItem) => (
                        <div className="element" key={navItem.key}>
                            <a href={navItem.link}>{navItem.name}</a>
                        </div>
                    ))}
                </div>
                <div className="external">
                    {externalLinks.map((navItem) => (
                        <div className="element" key={navItem.id}>
                            <a href={navItem.link}>{navItem.icon}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
