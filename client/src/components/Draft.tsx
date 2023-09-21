import React, { useEffect, useState, useReducer } from "react";
import NonLinearSlider from "./services/sliderFunction";
import Item from "./services/containerStyles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { height } from "@mui/system";
import reducer from "./services/useReducerFunction";

import Classes from "./DraftSettings/Classes";
import Sets from "./DraftSettings/Sets";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    const [initialState, setInitialState] = useState({
        classes: [],
        sets: [],
        numPacks: 0,
    });
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        numPacks: null,
    });

    const getGameInfo = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/info");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            interface GameData {
                name: string;
            }
            const gameClasses = responseBody.classes.map((gameClass: GameData) => {
                return {
                    className: gameClass,
                    classBool: false,
                };
            });

            const gameSets = responseBody.sets.map((gameSet: GameData) => {
                return {
                    setName: gameSet,
                    setBool: false,
                };
            });
            const newSettings = {
                classes: gameClasses,
                sets: gameSets,
                numPacks: 1,
            };
            setInitialState(newSettings);
        } catch (error: any) {
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getGameInfo();
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
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
        </form>
    );
};

export default Draft;
