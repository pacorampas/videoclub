import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, overview, imgSrc }) =>
  <div className="movie-card u-flex u-flexRow">
    <Link to={`/movie/${id}`}>
      <img className="movie-card-img" src={imgSrc} alt={title} />
    </Link>
    <div className="u-flex u-flexCol u-flexGrow1">
      <div className="movie-card-details u-flexGrow1">
        <h1 className="movie-card-title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h1>
        <p className="movie-card-overview">{overview}</p>
      </div>
      <div className="movie-card-more-info">
        <Link className="movie-card-link" to={`/movie/${id}`}>
          Más información
        </Link>
      </div>
    </div>
  </div>


MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default MovieCard
