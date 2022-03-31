import { ACTIONS, SELECT_USER } from "../actions";
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

    case ACTIONS.SET_ACTIVE_CHAT: 
    return {
      ...state,
      activeChat : action.payload
    }

    default:
      return state;
  }
};
