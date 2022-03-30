import { IUser } from "./IUser";
import { ISelectedUser } from "./IUser";

export interface IInitialState {
  userMe: IUser;
  selectedUser: ISelectedUser;
}
