import { IChat, IChatArray } from "../../types/IChat";
import { INewChat } from "../../types/IMsg";

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_REFRESH_TOKEN = "SET_USER_REFRESH_TOKEN";
export const NEW_MESSAGE = "NEW_MESSAGE"

export const ACTIONS = {
  SET_ACTIVE_CHAT_ID: "SET_ACTIVE_CHAT",
  SET_HISTORY: "SET_HISTORY",
  NEW_CHAT: "NEW_CHAT",
  ALL_CHATS : "ALL_CHATS"
};
export const INIT_SOCKET = "INIT_SOCKET";
export const LOGGED_IN = "LOGGED_IN";
export const INCOMING_MSG = "INCOMING_MSG";
export const DISCONNECT_SOCKET = "DISCONNECT_SOCKET";
export const SEND_MESSAGE = "SEND_MESSAGE";

// selected user
export const SELECT_USER = "SELECT_USER";

export const setUsernameAction = (username: string) => ({
  type: SET_USER_NAME,
  payload: username,
});
export const setUserAvatarAction = (avatar: string) => ({
  type: SET_USER_AVATAR,
  payload: avatar,
});
export const setUserEmailAction = (email: string) => ({
  type: SET_USER_EMAIL,
  payload: email,
});
export const setUserRefreshTokenAction = (refreshToken: string) => ({
  type: SET_USER_REFRESH_TOKEN,
  payload: refreshToken,
});

// selected user
export const selectUserAction = (user: any) => ({
  type: SELECT_USER,
  payload: user,
});

export const setInitSocketAction = (accessToken: string) => ({
  type: INIT_SOCKET,
  payload: accessToken,
});

export const sendMessageAction = (sendMessage: INewChat) => {
  return(dispatch:any) => {
    console.log("sendMessage from action", sendMessage)
    dispatch({
      type: SEND_MESSAGE,
      payload: sendMessage,
    })
  }
};

export const setActiveChatAction = (selectedChatId: string) => ({
  type: ACTIONS.SET_ACTIVE_CHAT_ID,
  payload: selectedChatId,
});

export const allChatsAction = (allChats: IChatArray) => ({
  type: ACTIONS.ALL_CHATS,
  payload: allChats,
});
