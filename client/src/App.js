import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Switch>
          <Route exact path={["/", "search"]}>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
