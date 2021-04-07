import React from "react";
import Mynavbar from "./components/navbar.js";
import Myimage from "./components/scrollsnaps.js";
import Mycontact from "./components/contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/im-too-nice/">
            <Mynavbar />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/im-too-nice/">
            <Myimage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/im-too-nice/contact">
            <Mycontact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
