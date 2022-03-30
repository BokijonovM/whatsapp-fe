export interface IUser {
  username: string;
  email: string;
  avatar: string;
  refreshToken: string;
  socket: string;
}
export interface userObject1 {
  username: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface userObject {
  username: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  user: userObject1;
}

export interface ISelectedUser {
  user: userObject[];
}

export type AUsersArray = userObject[];
