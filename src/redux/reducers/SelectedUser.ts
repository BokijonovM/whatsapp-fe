import { SELECT_USER } from "../actions";
import { initialState } from "../store";

export const SingleUserReducer = (
  state = initialState.selectedUser,
  action: any
) => {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
