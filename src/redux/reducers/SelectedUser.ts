import { IChat } from "../../types/IChat";
import { ACTIONS, NEW_MESSAGE, SELECT_USER } from "../actions";
import { initialState } from "../store/index";

export const SingleUserReducer = (
  state = initialState.selection,
  action: any
) => {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        selectedUser:action.payload
      };
    }

    case ACTIONS.SET_ACTIVE_CHAT_ID: 
    return {
      ...state,
      activeChatId : action.payload
    }

    case ACTIONS.ALL_CHATS: 
    return {
      ...state,
      allChats : action.payload
    }

    case NEW_MESSAGE:
      // find the chat with id a.payload.chatId
      // append the a.payload.message in the chat
       return {
         ...state,
         allChat : state.allChat.find((chat:IChat)=> chat._id === action.payload.chatId).messages.concat(action.payload.message)
       }
      

    default:
      return state;
  }
};
