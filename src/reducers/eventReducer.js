import {
  GET_EVENTS,
  GET_EVENT,
  SET_LOADING,
  EVENT_ERROR,
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  SEARCH_EVENT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../actions/types";

const initialState = {
  myevent: null,
  current: {
    name: "",
    location: "",
    date: "",
    time: "",
    about: "",
  },
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        myevent: action.payload,
        loading: false,
      };
    case GET_EVENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case ADD_EVENT:
      return {
        ...state,
        myevent: [...state.myevent, action.payload],
        loading: false,
      };
    case DELETE_EVENT:
      return {
        ...state,
        myevent: state.myevent.filter((event) => event.id !== action.payload),
        loading: false,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        myevent: state.myevent.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case SEARCH_EVENT:
      return {
        ...state,
        myevent: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: {
          name: "",
          location: "",
          date: "",
          time: "",
          about: "",
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EVENT_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
