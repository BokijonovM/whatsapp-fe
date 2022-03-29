export const setNewRoom = (payload: any) => ({
  type: "SET_NEW_ROOM",
  payload: payload,
});

export const setUserAllRooms = (payload: any) => ({
  type: "SET_USER_ALL_ROOMS",
  payload: payload,
});
export const setToggleRequest = () => ({
  type: "SET_TOGGLE_REQUEST",
});

export const setRoomToDisplay = (payload: any) => ({
  type: "SET_ROOM_TO_DISPLAY",
  payload: payload,
});

export const updateCurrentRoomMessage = (payload: any) => ({
  type: "UPDATE_CURRENT_ROOM_MESSAGE",
  payload: payload,
});
