import { IUser } from "./IUser";
import { userObject } from "./IUser";

export interface IInitialState {
  userMe: IUser;
  selectedUser: userObject | null;
  chat: {
    selected: any | null;
    chatList: any;
  };
}
