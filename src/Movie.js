import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchStuff } from './store/actions'

class Movie extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchStuff())
  }

  render() {
    const { match, stuff } = this.props

    return(
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h2>Movie: {match.params.id} {stuff.hi}</h2>
      </div>
    );
  }
}

Movie.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  stuff: PropTypes.shape({
    hi: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff,
  };
}

export default connect(
  mapStateToProps,
)(Movie);
