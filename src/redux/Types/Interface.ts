export interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface IChat {
  members: IUser[];
  messages: IMessage[];
}

export interface IMessage {
  sender: IUser;
  content: {
    text?: string;
    media?: string;
  };
  timestamp: number;
}
