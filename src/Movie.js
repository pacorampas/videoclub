import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidV4 from 'uuid/v4'
import { getMovieDetails } from './store/actions'

class Movie extends PureComponent {
  componentWillMount() {
    const { match, dispatch } = this.props
    dispatch(getMovieDetails(match.params.id))
  }

  render() {
    const { movieDetails, configuration } = this.props

    console.log(movieDetails)

    if (!movieDetails.title) {
      return <div />
    }

    return(
      <div>
        <h2>{movieDetails.title} ({movieDetails.release_date})</h2>
        <h3>{movieDetails.tagline}</h3>
        <p>{movieDetails.overview}</p>

        <p>Vote average: {movieDetails.vote_average}</p>
        <p>Vote count: {movieDetails.vote_count}</p>

        <img src={`${configuration.images.base_url}/w342/${movieDetails.poster_path}`} alt={movieDetails.title} />

        <h4>Technical data</h4>
        <ul>
          <li>For adults: {movieDetails.adults}</li>
          <li>Status: {movieDetails.status}</li>
          <li>Budget: {movieDetails.budget}</li>
          <li>Revenue: {movieDetails.revenue}</li>
          <li>Runtime: {movieDetails.runtime}</li>
          <li>Imdb id: {movieDetails.imdb_id}</li>
          <li>Original language: {movieDetails.original_language}</li>
          <li>Original title: {movieDetails.original_title}</li>
          <li>Popularity: {movieDetails.popularity}</li>
          <li>Video: {movieDetails.video}</li>
          <li>Homepage: <a href={movieDetails.homepage} target="_blank" rel="noreferrer noopener">go to homepage</a></li>
        </ul>

        <h4>Production companies</h4>
        <ul>
          {movieDetails.production_companies.map(company => <li key={company.id}>{company.name} - {company.logo_path}</li>)}
        </ul>

        <h4>Production countries</h4>
        <ul>
          {movieDetails.production_countries.map(country => <li key={uuidV4()}>{country.name}</li>)}
        </ul>

        <h4>Spoke lenguages</h4>
        <ul>
          {movieDetails.spoken_languages.map(lang => <li key={uuidV4()}>{lang.name}</li>)}
        </ul>

        {movieDetails.belongs_to_collection &&
          <Fragment>
            <h4>Collection</h4>
            <ul>
              <li>{movieDetails.belongs_to_collection.backdrop_path}</li>
              <li>{movieDetails.belongs_to_collection.id}</li>
              <li>{movieDetails.belongs_to_collection.name}</li>
              <li>{movieDetails.belongs_to_collection.poster_path}</li>
            </ul>
          </Fragment>
        }

        <h4>Gendres</h4>
        <ul>
          {movieDetails.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>

      </div>
    );
  }
}

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  movieDetails: PropTypes.shape({
    adults: PropTypes.bool,
    budget: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    belongs_to_collection: PropTypes.shape({
      backdrop_path: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }),
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })),
    homepage: PropTypes.string,
    imdb_id: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    production_companies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      logo_path: PropTypes.string,
      name: PropTypes.string,
    })),
    production_countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    spoken_languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    status: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
  configuration: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    })
  }).isRequired,
};

Movie.defaultProps = {
  movieDetails: {
    belongs_to_collection: null,
    genres: [],
    production_companies: [],
    configuration: {
      images: {},
    },
  },
}

function mapStateToProps(state) {
  return {
    movieDetails: state.movies.movieDetails,
    configuration: state.movies.configuration,
  };
}

export default connect(mapStateToProps)(Movie)
