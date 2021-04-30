import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/Navbar/Navbar";
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Switch>
          <Route exact path="/" component={Search}>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
