export const setNewRoom = (payload) => ({
  type: "SET_NEW_ROOM",
  payload: payload,
});

export const setUserAllRooms = (payload) => ({
  type: "SET_USER_ALL_ROOMS",
  payload: payload,
});
export const setToggleRequest = () => ({
  type: "SET_TOGGLE_REQUEST",
});

export const setRoomToDisplay = (payload) => ({
  type: "SET_ROOM_TO_DISPLAY",
  payload: payload,
});

export const updateCurrentRoomMessage = (payload) => ({
  type: "UPDATE_CURRENT_ROOM_MESSAGE",
  payload: payload,
});
