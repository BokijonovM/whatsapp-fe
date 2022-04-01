import { IMsg } from "./IMsg";
import { userObjectTest } from "./IUser";

export interface IChat {
  _id: string;
  members: userObjectTest[];
  messages: IMsg[];
}
export type IChatArray = IChat[];
