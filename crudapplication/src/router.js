import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import Logout from "./components/Logout/Logout";
import ShowPlayer from "./components/Player/ShowPlayer";
import EditPlayer from "./components/Player/EditPlayer";
import AddPlayer from "./components/Player/AddPlayer";
import NotFound from "./components/NotFound/NotFound";
const Router = () => {
    const isLoggedIn = window.localStorage.getItem("email") ? true : false;
    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} />
            <Switch>

                <Route exact path="/">
                    <Redirect to="/login"></Redirect>
                </Route>
                <Route exact path="/login">
                    <Signin />
                </Route>
                <Route exact path="/register">
                    <Signup />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/logout">
                    <Logout />
                </Route>
                <Route exact path="/players/:id">
                    <ShowPlayer />
                </Route>
                <Route exact path="/players/edit/:id">
                    <EditPlayer />
                </Route>
                <Route exact path="/add">
                    <AddPlayer />
                </Route>

                <Route >
                    <NotFound />
                </Route>

            </Switch>
        </BrowserRouter>
    );

}
export default Router;
