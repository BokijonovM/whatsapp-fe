import {
  SET_USER_NAME,
  SET_USER_AVATAR,
  SET_USER_EMAIL,
  SET_USER_REFRESH_TOKEN,
  INIT_SOCKET,
  LOGGED_IN,
  INCOMING_MSG,
  DISCONNECT_SOCKET,
  SEND_MESSAGE,
} from "../actions";
import { initialState } from "../store";
import io from "socket.io-client";
import socketSetup from "./socketSetup";
import { IChat } from "../../types/IChat";
// const socket = useSelector(s => s.socket)
// const handleClick = () => { socket.emit("testEvent")}

const userReducer = (state = initialState.userMe, action: any) => {
  switch (action.type) {
    case INIT_SOCKET:
      const ADDRESS: string = "http://localhost:3001";
      const socket = io(ADDRESS, {
        transports: ["websocket"],
        auth: { token: action.payload },
      });

      //     // initialize your socket listeners.....
      socketSetup(socket);
      return { ...state, socket };
    case "EMIT_TEST":
      state.socket?.emit("testEvent", { message: "Hello world" });
      return state;

    case SEND_MESSAGE:
      // update the correct chat with the new message
      // look for the chat which has chatId as _id
      state.socket?.emit("outgoing-msg", action.payload);
      // return {
      //   ...state,
      //   chats: state.chats
      //     .filter((chat: IChat) => chat._id === action.payload.chatId)
      //     .message.concat(action.payload.message),
      // };
      return state
    

      case "SET_USER_INFO":
        return {
          ...state,
          ...action.payload 
        }
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
