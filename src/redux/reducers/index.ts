import { USER_LOGIN_SUCCESS } from "../actions";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";

export interface UserState {
  loading?: boolean;
  error?: string;
  userInfo: { firstName?: string; lastName?: string };
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
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
