import React from "react";

function ProjectElement(props) {
    return (
        <div className="project-element">
            <div className="img-element"></div>
            <div className="description">{props.value.description}</div>

            <div className="tags">
                <div className="tag">{props.value.year}</div>
                {getTags(props.value.tags)}
            </div>
            <br></br>
        </div>
    );
}

function getTags(params) {
    if (params.length > 0) {
        return params.map((tag) => (
            <div key={tag.key} className="tag">
                {tag.text}
            </div>
        ));
    } else {
        return null;
    }
}

export default ProjectElement;
