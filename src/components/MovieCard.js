import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, overview, imgSrc }) => (<div>
  <h1>{title}</h1>
  <p>{overview}</p>
  <img src={imgSrc} alt={title} />
  <Link to={`/movie/${id}`}>
    Más información
  </Link>
</div>);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default MovieCard;
