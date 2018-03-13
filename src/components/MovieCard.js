import React from 'react';
import PropTypes from 'prop-types'

const MovieCard = ({ title, overview, imgSrc }) => (<div>
  <h1>{title}</h1>
  <p>{overview}</p>
  <img src={imgSrc} alt={title} />
</div>);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default MovieCard;
