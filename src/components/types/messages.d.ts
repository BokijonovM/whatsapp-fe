export interface IMessage {
  _id: number;
  content?: string;
  attachments: [string];
  sender: string;
  replyTo?: number;
  deleted?: boolean;
  createdAt: Date;
}
export interface IRoomDisplayed {
  _id: number;
  content?: string;
  attachments: [string];
  sender: string;
  replyTo?: number;
  deleted?: boolean;
  createdAt: Date;
  history?: [string];
}
