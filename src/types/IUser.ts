export interface IUser {
  username: string;
  email: string;
  avatar: string;
  refreshToken: string;
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

export interface ISelectedUser {
  user: userObject[];
}

export type AUsersArray = userObject[];
