import { userObjectTest } from "./IUser";

export interface IMsg {
  _id: string;
  sender: userObjectTest;
  timestamp: Date;
  content: {
    text: string;
    media: string;
  };
}
export interface INewChat {}
