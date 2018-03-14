import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import 'suitcss-utils-flex'
import logoSrc from './logo.svg'
import { configuration, getGenres } from './store/actions'
import Home from './Home.js'
import Movie from './Movie.js'
import NotFound from './NotFound.js'

class App extends Component {
  componentWillMount() {
    this.props.store.dispatch(configuration())
    this.props.store.dispatch(getGenres())
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header-content">
            <Link className="logo" to="/">
              <img width="52px" src={logoSrc} alt="Page logo" />
            </Link>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Discover</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </Fragment>
    );
  }
}

export default App;
