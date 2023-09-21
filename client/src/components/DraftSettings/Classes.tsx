import React from "react";
import BpCheckbox from "../services/checkboxFunction";
import Item from "../services/containerStyles";
import handleChange from "../services/handleChange";

export interface IClassesProps {
    allClasses: { classes: any[]; sets: any[]; numPacks: number };
    dispatch: React.Dispatch<any>;
}

const Classes: React.FunctionComponent<IClassesProps> = ({ dispatch, allClasses }) => {
    const classElements = allClasses.classes.map(
        (gameClass: { className: string; classBool: boolean }, index: number) => {
            return (
                <label htmlFor={gameClass.className} key={index}>
                    <h3 className="list-items">
                        {gameClass.className}
                        <BpCheckbox
                            id={gameClass.className}
                            name="class"
                            value={gameClass.className}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(event, dispatch)
                            }
                        />
                    </h3>
                </label>
            );
        }
    );

    return (
        <Item>
            <h1 className="list-title">Classes: </h1>
            {classElements}
        </Item>
    );
};

export default Classes;
