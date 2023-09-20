import React from "react";

export interface IClassesProps {
    gameClasses: Array<string>
    gameSets: Array<string>
}

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
    const { gameClasses, gameSets } = props;

    const classElements = gameClasses.map((gameClass) => {
        return (
            <label htmlFor={gameClass} key={gameClass} className="cell small-6">
                <h3>
                    {gameClass}
                    <input
                        id={gameClass}
                        type="checkbox"
                        name={gameClass}
                    />
                </h3>
            </label>
        );
    });

    const setElements = gameSets.map((set, index) => {
        return (
            <label htmlFor={set} key={index} className="cell small-6">
                <h3>
                    {set}
                    <input
                        id={set}
                        type="checkbox"
                        name={set}
                    />
                </h3>
            </label>
        )
    })
    return (<form className="grid-x">
        {classElements}
        {setElements}
        </form>)
};

export default Classes;
