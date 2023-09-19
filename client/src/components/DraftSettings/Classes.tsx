import React from "react";

export interface IClassesProps {
    gameClasses: Array<string>;
}

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
    const { gameClasses } = props;

    const handleChange = () => {};

    const classElements = gameClasses.map((gameClass) => {
        return (
            <label htmlFor={gameClass} key={gameClass}>
                <h3>
                    {gameClass}
                    <input
                        id={gameClass}
                        type="checkbox"
                        name={gameClass}
                        // onChange={handleChange}
                        // value={projectRecord.projectName}
                    />
                </h3>
            </label>
        );
    });
    return <div className="">{classElements}</div>;
};

export default Classes;
