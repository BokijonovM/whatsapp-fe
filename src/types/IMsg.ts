export interface IMsg {
  sender: string;
  timestamp: Date;
  content: {
    text: string;
    media: string;
  };
}

export interface INewChat {
  chatId:string,
  message :string
}