export interface IChat {
  _id?:string
  members: [Object];
  messages: [
    {
      sender: Object;
      content: {
        text: string;
        media: string;
      };
    }
  ];
}
