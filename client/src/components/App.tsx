import React from "react";
import "../assets/scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Draft from "./Draft";
import Opening from "./Opening";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/draft" element={<Draft />}></Route>
                    <Route path="/opening" element={<Opening />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
