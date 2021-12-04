import React from "react";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import { CollegeDetails } from "./components/college/CollegeDetails";
import { Home } from "./components/HomePage/Home";



const App = () => {

    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/college/:id" component={CollegeDetails} />
          </Switch>
      </Router>
    );}

export default App;

