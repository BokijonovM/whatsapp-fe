import { USER_LOGIN_SUCCESS } from "../actions";
import  {USER_LOGIN_REQUEST } from "../actions"

export interface UserState {
  loading?: boolean;
  error?: string;
  userDatas: { username?: string; email?: string };
}
interface Action {
  type: string;
  payload?: string;
}
export const userReducer = (state: UserState={ userDatas :{}}, action: Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userDatas: action.payload,
      };

    default:
      return state;
  }
};
