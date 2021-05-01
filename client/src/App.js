import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavHeader from "./components/Navbar/Navbar";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Route exact path="/" render={()=> <Search/>}/>
      </div>
    </Router>
  );
}

export default App;
