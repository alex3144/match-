import { combineReducers } from 'redux';

export function load(state = {
  error: null,
  loading: false,
  data: [],
}, action) {
  switch (action.type) {
    case 'LOAD_SUCCESS': {
      return { ...state, data: action.data };
    }
    case 'LOAD_ERROR': {
      return { ...state, error: action.error };
    }
    case 'LOAD_STATE': {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
}

export function upload(state = {
  error: null,
  loading: false,
  data: [],
}, action) {
  switch (action.type) {
    case 'UPLOAD_SUCCESS': {
      return { ...state, data: action.data };
    }
    case 'UPLOAD_ERROR': {
      return { ...state, error: action.error };
    }
    case 'UPLOAD_STATE': {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
}

export function rate(state = {
  error: null,
  loading: false,
  data: [],
}, action) {
  switch (action.type) {
    case 'RATE_SUCCESS': {
      return { ...state, data: action.data };
    }
    case 'RATE_ERROR': {
      return { ...state, error: action.error };
    }
    case 'RATE_STATE': {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
}

export default combineReducers({ load, rate, upload});
