export interface IUser {
  name: string;
  surname: string;
  email: string;
  avatar: string;
  status: string;
  _id: string;
}

export interface IUserStore {
  data: IUser;
  profileCanvasOpen: boolean;
}
