import request from './request'

export const CONFIGURATION_SUCCESS = 'CONFIGURATION_SUCCESS'
export const CONFIGURATION_FROM_LOCAL_STORAGE = 'CONFIGURATION_FROM_LOCAL_STORAGE'
export const DISCOVER_MOVIE_SUCCESS = 'DISCOVER_MOVIE_SUCCESS'
export const MOVIE_DETAILS_SUCCESS = 'MOVIE_DETAILS_SUCCESS'
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS'
export const ERROR = 'ERROR'

// @TODO make a elegants catch error
export const configuration = () => (dispatch) => {
  // @TODO renew localStorage.configuration every week
  if (localStorage.configuration) {
    dispatch({
      type: CONFIGURATION_FROM_LOCAL_STORAGE,
      data: JSON.parse(localStorage.configuration),
    })
  } else {
    return request.get('/configuration')
      .then((response) => {
        dispatch({
          type: CONFIGURATION_SUCCESS,
          data: response.data,
        })
        localStorage.configuration = JSON.stringify(response.data)
      })
      .catch((e) => dispatch({
        type: ERROR,
        value: true,
      }))
  }
}

export const discoverMovie = (page = 1, genreId) => (dispatch) => {
  const data = {
    params: {
      page,
    }
  };
  if (genreId && genreId > -1) {
    data.params['with_genres'] = genreId
  }
  return request.get('/discover/movie', data)
    .then((response) => dispatch({
      type: DISCOVER_MOVIE_SUCCESS,
      data: response.data,
    }))
    .catch((e) => dispatch({
      type: ERROR,
      value: true,
    }))
}

export const getMovieDetails = (movieId) => (dispatch) => {
  return request.get(`/movie/${movieId}`)
    .then((response) => dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      data: response.data,
    }))
    .catch((e) => dispatch({
      type: ERROR,
      value: true,
    }))
}

export const cleanError = () => dispatch => dispatch({
  type: ERROR,
  value: false,
})

export const getGenres = () => dispatch => {
  return request.get('/genre/movie/list')
    .then((response) => dispatch({
      type: GET_GENRES_SUCCESS,
      data: response.data.genres,
    }))
    .catch((e) => dispatch({
      type: ERROR,
      value: true,
    }))
}
