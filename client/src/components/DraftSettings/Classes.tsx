import React, {useReducer} from "react";
import BpCheckbox from "../services/checkboxFunction";
import NonLinearSlider from "../services/sliderFunction";
import Item from "../services/containerStyles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import handleChange from "../services/handleChange";
import reducer from "../services/useReducerFunction";

export interface IClassesProps {
    gameClasses: Array<string>
    gameSets: Array<string>
}

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
    const { gameClasses, gameSets } = props;
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        decks: 3
    });

    console.log(state)
    const classElements = gameClasses.map((gameClass) => {
        return (
            <label htmlFor={gameClass} key={gameClass}>
                <h3  className="list-items">
                    {gameClass}
                    <BpCheckbox 
                        id={gameClass}
                        name="class"
                        value={gameClass}
                        onChange={(event: any) => handleChange(event, dispatch)}
                    />
                    
                </h3>
            </label>
        );
    });

    const setElements = gameSets.map((set, index) => {
        return (
            <label htmlFor={set} key={index}>
                <h3 className="list-items">
                    {set}
                    <BpCheckbox 
                        id={set}
                        name="set"
                        value={set}
                        onChange={(event: any) => handleChange(event, dispatch)}
                    />
                </h3>
            </label>
        )
    })
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8}>
                    <Item><NonLinearSlider dispatch={dispatch}/></Item> 
                </Grid>
                <Grid item xs={6}>
                    <Item><h1 className="list-title">Classes: </h1>{classElements}</Item>         
                </Grid>
                <Grid item xs={6}>
                    <Item><h1 className="list-title">Sets: </h1>{setElements}</Item>              
                </Grid>   
            </Grid>
        </Box>
    )
};

export default Classes;
