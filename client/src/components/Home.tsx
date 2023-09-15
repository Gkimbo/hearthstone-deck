import React from "react";
import logo from "./logo.svg";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Heartstone Deck build</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default Home;
