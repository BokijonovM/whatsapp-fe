import { userObjectTest } from "./IUser";

export interface IChat {
  _id?: string;
  members: userObjectTest[];
  messages: [
    {
      sender: userObjectTest;
      content: {
        text: string;
        media: string;
      };
    }
  ];
}
export type IChatArray = IChat[];
