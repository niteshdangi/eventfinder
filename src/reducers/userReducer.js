import {
  REGISTER,
  LOGIN,
  LOGOUT,
  AUTH_LOADING,
  USER_ERROR,
} from "../actions/types";

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        auth: {
          accessToken: action.payload.data.accessToken,
          uid: action.payload.uid,
        },
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        auth: {
          accessToken: action.payload.data.accessToken,
          uid: action.payload.uid,
        },
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        auth: null,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
