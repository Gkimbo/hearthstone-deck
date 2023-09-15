import React from "react";

export interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return (
        <div className="callout">
            <div></div>
            Hello from about page
        </div>
    );
};

export default About;
