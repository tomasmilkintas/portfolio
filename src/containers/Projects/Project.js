import React from "react";
import "./Project.css";

function Project({ label, imgPath, tech, bulletPointOne, bulletPointTwo, website, github }) {
    return (
        <div className="project">
            <img src={imgPath} alt="" className="project__image" />
            <div className="project__info">
                <h1 className="project__title">{label}</h1>
                <p className="project__tech">
                    <i>{tech}</i>
                </p>
                <div className="project__features">
                    <p>- {bulletPointOne}</p>
                    <p>- {bulletPointTwo}</p>
                </div>
            </div>

            <button className="project__link">
                <a href={website} target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </button>
            <button className="project__link">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </button>
        </div>
    );
}

export default Project;
