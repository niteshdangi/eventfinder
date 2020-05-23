import { REGISTER, LOGIN, LOGOUT, AUTH_LOADING, USER_ERROR } from "./types";

// Add new user
export const registerUser = (user) => async (dispatch) => {
  try {
    setAuthLoading();
    const res2 = await fetch(`/users?email=${user.uid}`);
    const data2 = await res2.json();
    if (data2.length !== 0) {
      dispatch({
        type: USER_ERROR,
        payload: "User exists with this UID",
      });
    } else {
      const res = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({ email: user.uid, password: user.mpid }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.accessToken) {
        dispatch({
          type: USER_ERROR,
          payload: "User exists with this UID",
        });
      } else
        dispatch({
          type: REGISTER,
          payload: { data: data, uid: user.uid },
        });
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: "Failed to Register",
    });
  }
};

// Search server auths
export const loginUser = (user) => async (dispatch) => {
  try {
    setAuthLoading();

    const res = await fetch(`/signin`, {
      method: "POST",
      body: JSON.stringify({ email: user.uid, password: user.mpid }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(function (error) {
      console.log(error);
      if (error.response) {
        dispatch({
          type: USER_ERROR,
          payload: error.response,
        });
      } else if (error.request) {
        dispatch({
          type: USER_ERROR,
          payload: error.request,
        });
      } else {
        dispatch({
          type: USER_ERROR,
          payload: error.message,
        });
      }
    });
    try {
      const data = await res.json();

      if (!data.accessToken) {
        dispatch({
          type: USER_ERROR,
          payload: "Invalid UID/Password",
        });
      } else
        dispatch({
          type: LOGIN,
          payload: { data: data, uid: user.uid },
        });
    } catch (e) {
      dispatch({
        type: USER_ERROR,
        payload: await res.text(),
      });
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err,
    });
  }
};

export const clearError = () => {
  return {
    type: USER_ERROR,
    payload: "",
  };
};
// Clear current auth
export const Logout = () => {
  return {
    type: LOGOUT,
  };
};

// Set loading to true
export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};
