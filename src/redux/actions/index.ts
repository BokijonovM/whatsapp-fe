export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_REFRESH_TOKEN = "SET_USER_REFRESH_TOKEN";
export const INIT_SOCKET = "INIT_SOCKET"
export const LOGGED_IN = "LOGGED_IN"
export const INCOMING_MSG = "INCOMING_MSG"
export const DISCONNECT_SOCKET = "DISCONNECT_SOCKET"
  

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

export const setInitSocketAction = (accessToken:string) => ({
  type : INIT_SOCKET,
  payload : accessToken
})

export const loggedInAction = (socket: { on: (arg0: string, arg1: () => void) => void; }) => {
  return(dispatch: (arg0: string) => void) =>{
    socket.on("loggedIn",() =>{
      console.log("loggedin")
      dispatch({type : LOGGED_IN})
    })
  }
}

export const incomingMsgAction = (socket: { on: (arg0: string, arg1: () => void) => void; }) => {
  return(dispatch: (arg0: string) => void) =>{
    socket.on("loggedIn",() =>{
      console.log("loggedin")
      dispatch({type : INCOMING_MSG})
    })
  }
}

export const disconnectSocketAction = (socket: { on: (arg0: string, arg1: () => void) => void; }) => {
  return(dispatch: (arg0: string) => void) =>{
    socket.on("disconnect",() =>{
      console.log("loggedin")
      dispatch({type : DISCONNECT_SOCKET})
    })
  }
}

