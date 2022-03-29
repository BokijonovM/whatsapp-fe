import { USER_LOGIN_SUCCESS } from "../actions";
import  {USER_LOGIN_REQUEST } from "../actions"

export interface UserState {
  loading?: boolean;
  error?: string;
  userData: { username?: string; email?: string };
}
interface Action {
  type: string;
  payload?: string;
}
export const userReducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
      };

    default:
      return state;
  }
};
