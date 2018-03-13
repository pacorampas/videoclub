import React from 'react';
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

const MoviesList = ({ moviesResults }) => <ul>
  {moviesResults.length > 0 && moviesResults.map(movie => <li key={movie.id}>
    <MovieCard
      title={movie.title}
      overview={movie.overview}
    />
  </li>)}
  {/* @TODO: loading */}
  {moviesResults.length === 0 && <li>No results</li>}
</ul>;

MoviesList.propTypes = {
  moviesResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  })).isRequired,
};

export default MoviesList;
