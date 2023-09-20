import React, { useReducer } from "react";
import BpCheckbox from "../services/checkboxFunction";
import NonLinearSlider from "../services/sliderFunction";
import Item from "../services/containerStyles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import handleChange from "../services/handleChange";
import reducer from "../services/useReducerFunction";

export interface IClassesProps {
    draftSettings: {
        gameClasses: Array<object>;
        gameSets: Array<object>;
        numPacks: number;
    };
    setDraftSettings: (object: {
        gameClasses: Array<object>;
        gameSets: Array<object>;
        numPacks: number;
    }) => void;
}

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
    console.log(props);
    const { draftSettings, setDraftSettings } = props;
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        decks: 3,
    });

    console.log(draftSettings);
    const classElements = draftSettings.gameClasses.map((gameClass: any, index: number) => {
        return (
            <label htmlFor={gameClass.name} key={index}>
                <h3 className="list-items">
                    {gameClass.name}
                    <BpCheckbox
                        id={gameClass.name}
                        name="class"
                        value={gameClass.classBool}
                        onChange={(event: any) => handleChange(event, dispatch)}
                    />
                </h3>
            </label>
        );
    });

    const setElements = draftSettings.gameSets.map((gameSet: any, index: number) => {
        return (
            <label htmlFor={gameSet.name} key={index}>
                <h3 className="list-items">
                    {gameSet.name}
                    <BpCheckbox
                        id={gameSet.name}
                        name="gameSet"
                        value={gameSet.setBool}
                        onChange={(event: any) => handleChange(event, dispatch)}
                    />
                </h3>
            </label>
        );
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8}>
                    <Item>
                        <NonLinearSlider dispatch={dispatch} />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h1 className="list-title">Classes: </h1>
                        {classElements}
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h1 className="list-title">Sets: </h1>
                        {setElements}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Classes;
