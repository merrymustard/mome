import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import AddProducts from "./components/AddProducts"
import NotFound from "./components/404/NotFound.js";
import NavBar from "./components/NavBar"

const Router = () => (
  <BrowserRouter>
  <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/addproduct" component={AddProducts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
