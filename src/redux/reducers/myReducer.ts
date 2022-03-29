import {
  SET_USER_NAME,
  SET_USER_AVATAR,
  SET_USER_EMAIL,
  SET_USER_REFRESH_TOKEN,
} from "../actions";
import { initialState } from "../store";

const userReducer = (state = initialState.userMe, action: any) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
