import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavHeader from "./components/Navbar/Navbar";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks"

function App() {
  return (
    <Router>
      <div>
          <NavHeader />
          <Route exact path="/" render={() => <Search />} />
          <Route exact path="/saved-books" render={() => <SavedBooks />} />
      </div>
    </Router>
  );
}

export default App;
