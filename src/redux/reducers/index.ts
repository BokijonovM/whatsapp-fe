import { SET_USER_NAME } from "../actions";
import { IUser } from "../Types/Interface";

interface State {
  users: IUser[];

}
export const userReducer = (state: State, action:any) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
        email:action.payload
      };

    default:
      return state;
  }
};
