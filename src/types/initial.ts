import { IChat, IChatArray } from "./IChat";
import { IUser } from "./IUser";
import { userObject } from "./IUser";

export interface IInitialState {
  userMe: IUser;
  selection :{
    activeChatId: string
    selectedUser: userObject | null;
    allChats : IChatArray
  }
  chat: {
    selected: any | null;
    chatList: any;
  };
}
