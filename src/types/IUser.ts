export interface IUser {
  username: string;
  email: string;
  avatar: string;
  refreshToken: string;
  socket: string;
}

export interface userObjectTest {
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
  user: userObjectTest;
}
export interface chatObject {
user : string,
_id : string,
createdAt : string
}

export interface ISelectedUser {
  user: userObject[];
}

export type AUsersArray = userObject[];
export type AChatsArray = chatObject[];


