import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidV4 from 'uuid/v4'
import { getMovieDetails, cleanError } from './store/actions'
import PointsBar from './components/PointsBar'
import TabPannel from './components/TabPannel'

class Movie extends Component {
  componentWillMount() {
    const { match, dispatch } = this.props
    dispatch(getMovieDetails(match.params.id))
  }

  render() {
    const { movieDetails, configuration } = this.props

    if (this.props.error) {
      // @TODO search better place to make redirection
      this.props.dispatch(cleanError())
      this.props.history.push('/error')
      return false
    }

    if (!movieDetails.title) {
      return <div />
    }

    return(
      <div className="movie">

        <section className="movie-details-wrapper">
          <img className="movie-details-backdrop" src={`${configuration.images.base_url}/w780/${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          <div className="movie-details u-flex">
            <div className="movie-details-poster u-flexGrow1">
              <img className="movie-details-poster-img" src={`${configuration.images.base_url}/w342/${movieDetails.poster_path}`} alt={movieDetails.title} />
            </div>
            <div className="movie-details-title-wrapper u-flexGrow2">
              <h2 className="movie-details-title color-white">
                {movieDetails.title} <span className="color-white opacity-text">({movieDetails.release_date})</span>
              </h2>
              <h3 className="color-white opacity-text">{movieDetails.tagline}</h3>
            </div>
          </div>
          <div className="movie-details-more-info">
            <h4 className="color-white">General</h4>
            <p className="color-white opacity-text">{movieDetails.overview}</p>
          </div>
        </section>

        <section className="movie-bars">
          <div className="movie-bars-item">
            <h4>Votes ({movieDetails.vote_count})</h4>
            <PointsBar points={movieDetails.vote_average} max={10} color="#ff8e25" />
          </div>
          <div className="movie-bars-item">
            <h4>Popularity</h4>
            <PointsBar points={movieDetails.popularity} max={1000} color="#ff8e25" />
          </div>
        </section>

        <section>
          <TabPannel
            data={[
              {
                tab: 'TECNICAL DATA',
                pannel:
                  <div>
                    <h4>Interesting data</h4>
                    <ul className="list opacity-text-intense">
                      <li>Budget: {movieDetails.budget}</li>
                      <li>Revenue: {movieDetails.revenue}</li>
                      <li>Runtime: {movieDetails.runtime}</li>
                      <li>For adults: {movieDetails.adults}</li>
                      <li>Status: {movieDetails.status}</li>
                      <li>Imdb id: {movieDetails.imdb_id}</li>
                      <li>Original language: {movieDetails.original_language}</li>
                      <li>Original title: {movieDetails.original_title}</li>
                      <li>Video: {movieDetails.video}</li>
                      <li>Homepage: <a href={movieDetails.homepage} target="_blank" rel="noreferrer noopener">go to homepage</a></li>
                    </ul>
                  </div>
              },
              {
                tab: 'PRODUCTION DATA',
                pannel:
                  <div>
                    <h4>Production companies</h4>
                    <ul className="list opacity-text-intense">
                      {movieDetails.production_companies.map(company => <li key={company.id}>{company.name}</li>)}
                    </ul>

                    <h4>Production countries</h4>
                    <ul className="list opacity-text-intense">
                      {movieDetails.production_countries.map(country => <li key={uuidV4()}>{country.name}</li>)}
                    </ul>
                  </div>
              },
              {
                tab: 'LANGUAGES',
                pannel:
                  <div>
                    <h4>Languages</h4>
                    <ul className="list opacity-text-intense">
                      {movieDetails.spoken_languages.map(lang => <li key={uuidV4()}>{lang.name}</li>)}
                    </ul>
                  </div>
              },
            ]}
          />
        </section>

        {movieDetails.belongs_to_collection &&
          <div className="movie-collection u-flex u-flexJustifyCenter" style={{ background: `url(${configuration.images.base_url}/w780/${movieDetails.belongs_to_collection.backdrop_path})`}}>
            {/* @TODO make a component with srcSet for get optimized images and with base_url  */}
            <div className="movie-collection-poster u-flexGrow1">
            <img className="movie-collection-poster-img" src={`${configuration.images.base_url}/w342/${movieDetails.belongs_to_collection.poster_path}`} alt={movieDetails.title} />
            </div>
            <div className="movie-collection-title u-flexGrow3 u-flex u-flexCol u-flexJustifyCenter">
              <h3 className="color-white">Collection: {movieDetails.belongs_to_collection.name}</h3>
              <div>
                <button className="button" onClick={() => alert('Siento las molestias pero aún no funciona')}>Go to collection</button>
              </div>
            </div>
          </div>
        }

        <section className="movie-genres">
          <h4>Gendres</h4>
          <ul>
            {movieDetails.genres.map(genre => <li className="genres" key={genre.id}>{genre.name}</li>)}
          </ul>
        </section>

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
    backdrop_path: PropTypes.string,
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
    error: state.movies.error,
  };
}

export default connect(mapStateToProps)(Movie)
