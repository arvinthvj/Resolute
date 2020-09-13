import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Grid from "./Grid.js";
import Home from "./Home.js";
import MediaCard from "./MediaCard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/home">
          <Navbar />
          <Home />
        </Route>

        <Route path="/product">
          <MediaCard />
        </Route>
      </div>
    </Router>
  );
}

export default App;
