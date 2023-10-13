import React, { useReducer } from "react";
import "../assets/scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Draft from "./Draft";
import Opening from "./Opening";
import reducer from "./services/useReducerFunction";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        classes: [],
        sets: [],
        numPacks: 1,
        error: "",
        cardsFromBackend: null,
    });

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/draft"
                        element={<Draft state={state} dispatch={dispatch} />}
                    ></Route>
                    <Route
                        path="/opening"
                        element={<Opening state={state} dispatch={dispatch} />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
