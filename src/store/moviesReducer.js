import { DISCOVER_MOVIE_SUCCESS } from './actions';

export default function movies(state = {}, action) {
  let newState;
  switch (action.type) {
    case DISCOVER_MOVIE_SUCCESS:
      return {
        ...state,
        moviesResults: action.data.results,
        page: action.data.page,
        totalPages: action.data.total_pages,
        totalResults: action.data.total_results,
      };
    default:
      return state;
  }
}
