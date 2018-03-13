import { CONFIGURATION_SUCCESS, CONFIGURATION_FROM_LOCAL_STORAGE, DISCOVER_MOVIE_SUCCESS, MOVIE_DETAILS_SUCCESS } from './actions'

export default function movies(state = {}, action) {
  switch (action.type) {
    case CONFIGURATION_SUCCESS:
    case CONFIGURATION_FROM_LOCAL_STORAGE:
      return {
        ...state,
        configuration: {
          images: action.data.images,
        },
      };
    case DISCOVER_MOVIE_SUCCESS:
      return {
        ...state,
        moviesResults: action.data.results,
        page: action.data.page,
        totalPages: action.data.total_pages,
        totalResults: action.data.total_results,
      };
    case MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.data,
      };
    default:
      return state;
  }
}
