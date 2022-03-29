export interface IChat {
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
