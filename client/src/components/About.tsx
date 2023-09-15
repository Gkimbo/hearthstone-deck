import React from "react";

export interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return (
        <div className="callout">
            <div className="button">Hello from about page</div>
        </div>
    );
};

export default About;
