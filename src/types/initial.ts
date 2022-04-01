import { IChat, IChatArray } from "./IChat";
import { IUser } from "./IUser";
import { userObjectTest } from "./IUser";

export interface IInitialState {
  userMe: IUser;
  selection :{
    activeChatId: string
    selectedUser: userObjectTest | null;
    allChats : IChatArray
  }
  chat: {
    selected: any | null;
    chatList: any;
  };
}
