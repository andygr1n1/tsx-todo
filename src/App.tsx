import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./Components/Navbar";
import {TodoApp} from "./Pages/TodoApp";
import {Information} from "./Pages/Information";
import {Footer} from "./Components/Footer";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Navbar/>
                <div className="main-section container ">
                    <Switch>
                        <Route component={TodoApp} path="/" exact />
                        <Route component={Information} path="/information" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
