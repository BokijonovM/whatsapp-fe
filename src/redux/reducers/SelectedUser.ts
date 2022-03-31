import { SELECT_USER } from "../actions";
import { initialState } from "../store/index";

export const SingleUserReducer = (
  state = initialState.selection,
  action: any
) => {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        selectedUser:{...state.selection, user:action.payload}
      };
    }

    default:
      return state;
  }
};
