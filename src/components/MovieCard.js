import React from 'react';
import PropTypes from 'prop-types'

const MovieCard = ({ title, overview }) => (<div>
  <h1>{title}</h1>
  <p>{overview}</p>
</div>);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
