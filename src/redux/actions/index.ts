export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_REFRESH_TOKEN = "SET_USER_REFRESH_TOKEN";

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
