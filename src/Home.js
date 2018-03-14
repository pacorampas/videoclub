import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { discoverMovie } from './store/actions'

import MoviesList from './components/MoviesList'
import Pagination from './components/Pagination'
import Select from './components/Select'

class Home extends PureComponent {
  componentWillMount() {
    this.props.dispatch(discoverMovie(this.props.page))
  }

  render() {
    const {
      dispatch,
      moviesResults,
      page,
      totalPages,
      configuration,
      genres,
    } = this.props

    const noneGenre = [{ id: -1, name: 'Not filtered' }]

    return (
      <div className="disvover-container">
        <Select
          options={noneGenre.concat(genres)}
          onChange={(value) => dispatch(discoverMovie(1, value))}
        />

        <MoviesList moviesResults={moviesResults} baseUrl={configuration.images.base_url} />
        <Pagination
          page={page}
          totalPages={totalPages}
          action={page => dispatch(discoverMovie(page))}
        />
      </div>
    )
  }
}

Home.propTypes = {
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
  configuration: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    })
  }).isRequired,
};

Home.defaultProps = {
  moviesResults: [],
  page: 1,
  totalPages: 0,
  configuration: {
    images: {},
  },
  genres: [],
}

function mapStateToProps(state) {
  return {
    moviesResults: state.movies.moviesResults,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    configuration: state.movies.configuration,
    genres: state.movies.genres,
  };
}

export default connect(
  mapStateToProps,
)(Home);
