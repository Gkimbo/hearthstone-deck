import React from "react";
import BpCheckbox from "../services/checkboxFunction";
import Item from "../services/containerStyles";
import handleChange from "../services/handleChange";

export interface IClassesProps {
    allSets: { classes: any[]; sets: any[]; numPacks: number };
    dispatch: React.Dispatch<any>;
}

const Sets: React.FunctionComponent<IClassesProps> = ({ dispatch, allSets }) => {
    const setElements = allSets.sets.map(
        (gameSet: { setName: string; setBool: boolean }, index: number) => {
            return (
                <label htmlFor={gameSet.setName} key={index}>
                    <h3 className="list-items">
                        {gameSet.setName}
                        <BpCheckbox
                            id={gameSet.setName}
                            name="set"
                            value={gameSet.setName}
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
            <h1 className="list-title">Sets: </h1>
            {setElements}
        </Item>
    );
};

export default Sets;
