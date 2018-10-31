export function error(error) {
  return { type: 'LOAD_ERROR', error };
}

export function loading(loading) {
  return { type: 'LOAD_STATE', loading };
}

export function success(data) {
  return { type: 'LOAD_SUCCESS', data };
}

export function fetchData() {
  return dispatch => {
    dispatch(loading(true));
    return fetch('http://46.101.38.71:8080/init')      
    .then(response => response.json())
    .then(data => {
        dispatch(loading(false));
        dispatch(success(data));
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message));
      });
  };
}

