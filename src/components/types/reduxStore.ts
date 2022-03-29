// import { Book } from "./Book";

export interface ReduxStore1 {
  cart: {
    products: Book[];
  };
  user: {
    firstName: string;
  };
  books: {
    stock: Book[];
    error: boolean;
    loading: boolean;
  };
}
export interface ReduxStore {
  user: {
    isLogged: boolean;
    userData: {};
  };
  chat: {
    allChatsRooms: [];
    roomDisplayed: [];
    toggleRequest: boolean;
  };
}
