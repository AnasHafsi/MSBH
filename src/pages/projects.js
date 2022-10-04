import React from "react";
import ProjectElement from "./components/projectElement";

const listProjects = [
    {
        id: 1,
        name: "Douce&Belle",
        description: "Douce & Belle Web design and responsive",
        year: 2020,
        tags: [
            { id: 1, text: "Branding" },
            { id: 2, text: "UI Design" },
            { id: 3, text: "UI Research" },
        ],
    },
    {
        id: 2,
        name: "MSBH",
        description: "MSBH Web design and responsive",
        year: 2021,
        tags: [
            { id: 1, text: "Branding" },
            { id: 2, text: "UI Design" },
            { id: 3, text: "UI Research" },
        ],
    },
    {
        id: 3,
        name: "Project23",
        description: "MSBH Project23 Web design and responsive",
        year: 2022,
        tags: [
            { id: 1, text: "Branding" },
            { id: 2, text: "UI Design" },
            { id: 3, text: "UI Research" },
        ],
    },
];

function Projects() {
    return (
        <div className="projects">
            <div className="elements">
                {listProjects.map((project) => (
                    <div className="element">
                        <ProjectElement
                            key={project.id}
                            value={project}
                        ></ProjectElement>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
