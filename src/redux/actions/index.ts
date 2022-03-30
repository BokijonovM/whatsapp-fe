export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_REFRESH_TOKEN = "SET_USER_REFRESH_TOKEN";

// selected user
export const SET_SELECTED_USER_NAME = "SET_SELECTED_USER_NAME";
export const SET_SELECTED_USER_AVATAR = "SET_SELECTED_USER_AVATAR";
export const SET_SELECTED_USER_EMAIL = "SET_SELECTED_USER_EMAIL";

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
export const setSelectedUsernameAction = (username: string) => ({
  type: SET_SELECTED_USER_NAME,
  payload: username,
});
export const setSelectedUserAvatarAction = (avatar: string) => ({
  type: SET_SELECTED_USER_AVATAR,
  payload: avatar,
});
export const setSelectedUserEmailAction = (email: string) => ({
  type: SET_SELECTED_USER_EMAIL,
  payload: email,
});
