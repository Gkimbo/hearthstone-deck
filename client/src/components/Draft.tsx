import React, { useEffect, useState, useReducer } from "react";
import NonLinearSlider from "./services/sliderFunction";
import Item from "./services/containerStyles";
import { Box, Grid, Button } from "@mui/material";
import reducer from "./services/useReducerFunction";
import getGameInfo from "./services/getGameInfo";
import submitUserInput from "./services/submitUserInput";
import type { State } from "./types/Draft";

import Classes from "./DraftSettings/Classes";
import Sets from "./DraftSettings/Sets";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    const [initialState, setInitialState] = useState<State>({
        classes: [{ className: "", classBool: false }],
        sets: [{ setName: "", setBool: false }],
        numPacks: 0,
    });
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        numPacks: null,
    });

    useEffect(() => {
        getGameInfo().then((info: State | undefined) => {
            if (!info) {
            } else {
                setInitialState(info);
            }
        });
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await submitUserInput(state);
        console.log(response);
    };

    return (
        <form className="callout" onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center">
                    <Grid item xs={10}>
                        <Item>
                            <NonLinearSlider dispatch={dispatch} />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="container-1">
                            <Classes dispatch={dispatch} allClasses={initialState} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="container-1">
                            <Sets dispatch={dispatch} allSets={initialState} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Button color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Draft;
