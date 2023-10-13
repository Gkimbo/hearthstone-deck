import React from "react";
import { State } from "./types/Draft";

export interface IDraftProps {
    state: State;
    dispatch: React.Dispatch<any>;
}

const Opening: React.FunctionComponent<IDraftProps> = ({ state, dispatch }) => {
    return <div>Opening Page</div>;
};

export default Opening;
