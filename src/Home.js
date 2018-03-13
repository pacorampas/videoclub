import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { discoverMovie } from './store/actions'

import MoviesList from './components/MoviesList'
import Pagination from './components/Pagination'

class Movie extends PureComponent {
  componentWillMount() {
    this.props.dispatch(discoverMovie(this.props.page))
  }

  render() {
    const {
      dispatch,
      moviesResults,
      page,
      totalPages,
      totalResults
    } = this.props;

    return(
      <div>
        <MoviesList moviesResults={moviesResults} />
        <Pagination
          page={page}
          totalPages={totalPages}
          totalResults={totalResults}
          action={page => dispatch(discoverMovie(page))}
        />
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
  moviesResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  })).isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number,
};

Movie.defaultProps = {
  moviesResults: [],
  page: 1,
  totalPages: null,
  totalResults: null,
}

function mapStateToProps(state) {
  console.log(state)
  return {
    moviesResults: state.movies.moviesResults,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    totalResults: state.movies.totalResults,
  };
}

export default connect(
  mapStateToProps,
)(Movie);
