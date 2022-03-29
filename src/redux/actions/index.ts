import axios from "axios";

export const setUserData = (payload: any) => ({
  type: "SET_USER_DATA",
  payload: payload,
});

export const setUserLogged = (payload: any) => ({
  type: "SET_LOGGED_IN",
});
export const setUserLoggedOut = (payload: any) => ({
  type: "SET_LOGGED_OUT",
  payload: payload,
});

export const setUserLogin = (email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/login`;

    try {
      let response = await axios.post(
        baseUrl,
        { email: email, password: password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        dispatch({
          type: "SET_LOGGED_IN",
        });
      } else {
        dispatch({
          type: "SET_LOGGED_OUT",
        });
      }
    } catch (error) {
      dispatch({
        type: "SET_LOGGED_OUT",
      });
    }
  };
};

interface nEOinter {
  name: string;
  email: string;
  password: string;
}

export const registerUser = ({ name, email, password }: nEOinter) => {
  return async (dispatch: any) => {
    const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/register`;
    try {
      let response = await axios.post(
        baseUrl,
        { name: name, email: email, password: password },
        { withCredentials: true }
      );
      if (response.status === 201) {
        dispatch({
          type: "SET_LOGGED_IN",
        });
      } else {
        dispatch({
          type: "SET_LOGGED_OUT",
        });
      }
    } catch (error) {
      dispatch({
        type: "SET_LOGGED_OUT",
      });
    }
  };
};
