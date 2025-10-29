import React from "react";
import PropTypes from "prop-types";

function ProjectElement(props) {
    return (
        <div className="project-element">
            <div className="img-element"></div>
            <div className="description" key={props?.value && props?.value.id}>
                {props?.value && props.value.description}
            </div>

            <div className="tags">
                <div className="tag">{props?.value && props.value.year}</div>
                {getTags(props?.value && props.value.tags)}
            </div>
        </div>
    );
}

ProjectElement.propTypes = {
    value: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        year: PropTypes.number,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            })
        ),
    }),
};

function getTags(params) {
    if (params?.length > 0) {
        return params.map((tag) => (
            <div key={tag.id} className="tag">
                {tag.text}
            </div>
        ));
    } else {
        return null;
    }
}

export default ProjectElement;
