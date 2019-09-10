import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/home/home";
import Detail from "../components/detail/detail";
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Redirect from="/" to="/home"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Router;