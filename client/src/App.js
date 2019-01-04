import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="text-center">New York Times Article Search</h1>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
