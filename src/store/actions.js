import request from './request'

export const DISCOVER_MOVIE_SUCCESS = 'DISCOVER_MOVIE_SUCCESS';

export const discoverMovie = (page = 1) => (dispatch) => {
  return request.get('/discover/movie', {
    params: {
      page,
    }
  })
    .then((response) => dispatch({
      type: DISCOVER_MOVIE_SUCCESS,
      data: response.data,
    }))
    .catch((e) => console.log(e))
}
