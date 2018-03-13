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
      totalResults,
      configuration,
    } = this.props;

    return(
      <div>
        <MoviesList moviesResults={moviesResults} baseUrl={configuration.images.base_url} />
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
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  configuration: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    })
  }).isRequired,
};

Movie.defaultProps = {
  moviesResults: [],
  page: 1,
  totalPages: 0,
  totalResults: 0,
  configuration: {
    images: {},
  },
}

function mapStateToProps(state) {
  return {
    moviesResults: state.movies.moviesResults,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    totalResults: state.movies.totalResults,
    configuration: state.movies.configuration,
  };
}

export default connect(
  mapStateToProps,
)(Movie);
