import React from "react";
import "../assets/scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
