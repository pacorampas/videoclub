import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './Home.js'
import Movie from './Movie.js'
import NotFound from './NotFound.js'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <hr />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
