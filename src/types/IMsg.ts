export interface IMsg {
  _id:string
  sender: string;
  timestamp: Date;
  content: {
    text: string;
    media: string;
  };
}
export interface INewChat{}
