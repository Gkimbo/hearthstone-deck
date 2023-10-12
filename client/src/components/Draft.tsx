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
        numPacks: 1,
    });
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        numPacks: 1,
        error: null,
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
        if (state.classes.length !== 0 && state.sets.length !== 0) {
            const response = await submitUserInput(state);
            dispatch({ type: "ERROR", payload: null });
            console.log(response);
        } else {
            dispatch({
                type: "ERROR",
                payload: "Please select one or more Classes and one or more Sets",
            });
        }
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
                {state.error ? (
                    <div className="error-message">
                        <div className="error-style">{state.error}</div>
                    </div>
                ) : null}
                <div className="button-container">
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            width: 300,
                            color: "primary",
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Box>
        </form>
    );
};

export default Draft;
