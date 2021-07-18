import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signin from "H:/Project/JavaScript/Soap_Search/soap_search/client/src/Components/Signin.js"
import Signup from "H:/Project/JavaScript/Soap_Search/soap_search/client/src/Components/Signup.js"
import Home from "H:/Project/JavaScript/Soap_Search/soap_search/client/src/Components/home.js"

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/signin" component={Signin}>
          </Route>
          <Route path="/signup" component={Signup}>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
