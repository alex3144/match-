export function error(error) {
    return { type: 'RATE_ERROR', error };
  }
  
  export function loading(loading) {
    return { type: 'RATE_STATE', loading };
  }
  
  export function success(data) {
    return { type: 'RATE_SUCCESS', data };
  }

  export function successDataReload(data) {
    return { type: 'LOAD_SUCCESS', data };
  }
  
  export function rate(data) {
    return dispatch => {
      dispatch(loading(true));
      return fetch('http://192.168.99.100:8080/rate', 
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
          item1: data.item1,
          item2: data.item2,
          result: data.result,
          values: data.data
        }),
      })      
      .then(response => response.json())
      .then(data => {
          dispatch(loading(false));
          dispatch(successDataReload(data));
        })
        .catch(e => {
          dispatch(loading(false));
          dispatch(error(e.message));
        });
    };
  }
  
  