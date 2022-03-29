import { IMessage } from "./messages";
import { IUser } from "./users";

export interface IConversation {
  _id: string;
  title: string;
  messageHistory: IMessage[];
  avatar: string;
  description?: string;
  background?: string;
  users: [
    {
      _id: string | IUser;
      role: string;
      banned: boolean;
    }
  ];
  closed?: boolean;
  groupType: string;
  typing?: { [key: string]: number };
}

export interface IConversationStore {
  data: IConversation[];
  active: string;
  users: {
    [key: string]: IUser;
  };
  addGroupCanvasOpen: boolean;
  inviteCanvasOpen: boolean;
}
