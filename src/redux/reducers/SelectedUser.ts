import {
  SET_SELECTED_USER_NAME,
  SET_SELECTED_USER_AVATAR,
  SET_SELECTED_USER_EMAIL,
} from "../actions";
import { initialState } from "../store";

const selectedUserReducer = (
  state = initialState.selectedUser,
  action: any
) => {
  switch (action.type) {
    case SET_SELECTED_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_SELECTED_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SET_SELECTED_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default selectedUserReducer;
