import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container" style={{ marginTop: '80px' }}>
            <Switch>
              <Route exact path="/">
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to
                  reload.
                </p>
              </Route>
              <Route path="/cart" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
