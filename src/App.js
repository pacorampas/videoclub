import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { configuration } from './store/actions'
import Home from './Home.js'
import Movie from './Movie.js'
import NotFound from './NotFound.js'

class App extends Component {
  componentWillMount() {
    this.props.store.dispatch(configuration())
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
