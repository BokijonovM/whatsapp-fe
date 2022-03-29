import { AnyRecord } from "dns";
import { initialState } from "../store";

export const userReducer = (state = initialState.user, action: any) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLogged: true,
      };

    case "SET_LOGGED_OUT":
      return {
        ...state,
        isLogged: false,
      };

    case "SET_USER_DATA":
      return {
        ...state,
        userData: {
          ...action.payload,
        },
      };

    default: {
      return state;
    }
  }
};
