import { IChat } from "./IChat";
import { IUser } from "./IUser";
import { userObject } from "./IUser";

export interface IInitialState {
  userMe: IUser;
  selection :{
    activeChat: IChat
    selectedUser: userObject | null;
  }
  chat: {
    selected: any | null;
    chatList: any;
  };
}
