export const FETCH_STUFF = 'FETCH_STUFF';
export const RECEIVE_STUFF = 'RECEIVE_STUFF';

export function fetchStuff() {
  return dispatch => {
    return dispatch({
      type: RECEIVE_STUFF,
      stuff: { hi: 'world' },
    });
  }
};
