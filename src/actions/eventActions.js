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
} from "./types";

// Get events from server
export const getEvents = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/events");
    const data = await res.json();

    dispatch({
      type: GET_EVENTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Request Failed",
    });
  }
};

// Get event with id from server
export const getEvent = (id) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/events/${id}`);
    const data = await res.json();

    dispatch({
      type: GET_EVENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Request Failed",
    });
  }
};

// Add new myevent
export const addEvent = (myevent) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/events", {
      method: "POST",
      body: JSON.stringify(myevent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_EVENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Failed to Add Event",
    });
  }
};

// Delete myevent from server
export const deleteEvent = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/events/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Request Failed",
    });
  }
};

// Update myevent on server
export const updateEvent = (myevent) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/events/${myevent.id}`, {
      method: "PUT",
      body: JSON.stringify(myevent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_EVENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Request Failed",
    });
  }
};

// Search server myevents
export const searchEvents = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/events?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_EVENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "Request Failed",
    });
  }
};

// Set current myevent
export const setCurrent = (myevent) => {
  return {
    type: SET_CURRENT,
    payload: myevent,
  };
};

// Clear current myevent
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
