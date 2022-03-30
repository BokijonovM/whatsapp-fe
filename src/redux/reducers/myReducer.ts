import {
  SET_USER_NAME,
  SET_USER_AVATAR,
  SET_USER_EMAIL,
  SET_USER_REFRESH_TOKEN,
} from "../actions";
import { initialState } from "../store";
// import io from "socket.io-client"
import { ACTIONS } from "../actions/index";

const userReducer = (state = initialState.userMe, action: any) => {
  switch (action.type) {
    //case "INIT_SOCKET":
    // const socket = io(ADDRESS, { transports: ['websocket'], auth: 'MY_TOKEN'})
    // initialize your socket listeners.....

    //socket.on("connection")
    //socket.on("disconnect")
    //socket.on("incoming-msg")

    //return { ...state, socket}
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
    case ACTIONS.SET_ACTIVE_CHAT:
      return {
        chatList: action.payload,
      };
    case ACTIONS.SET_HISTORY:
      return {
        selected: action.payload,
      };
    case ACTIONS.NEW_MESSAGE:
      return {
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
