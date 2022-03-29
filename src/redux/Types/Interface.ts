export interface IUser {
  username: string;
  email: string;
  avatar?: string;
  refreshToken?: string;
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
export interface IInitialState {
  user: IUser;
}
