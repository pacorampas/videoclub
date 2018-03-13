import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <h2>Movie: {match.params.id}</h2>
  </div>
);

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Movie;
