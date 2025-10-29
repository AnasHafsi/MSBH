import React from "react";
import Behance from "../assets/behance.inline.svg";
import Dribbble from "../assets/dribbble.inline.svg";
import Instagram from "../assets/instagram.inline.svg";
import Linkedin from "../assets/linkedin.inline.svg";

export const SOCIAL_LINKS = [
    {
        id: 1,
        name: "Behance",
        link: "https://behance.net/yourusername",
        icon: <Behance />,
    },
    {
        id: 2,
        name: "Instagram",
        link: "https://instagram.com/yourusername",
        icon: <Instagram />,
    },
    {
        id: 3,
        name: "Dribbble",
        link: "https://dribbble.com/yourusername",
        icon: <Dribbble />,
    },
    {
        id: 4,
        name: "LinkedIn",
        link: "https://linkedin.com/in/yourusername",
        icon: <Linkedin />,
    },
];
