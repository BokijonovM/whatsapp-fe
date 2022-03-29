import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action: any) => {
  switch (action.type) {
    case "SET_USER_ALL_ROOMS":
      return {
        ...state,
        allChatsRooms: action.payload,
      };
    case "SET_TOGGLE_REQUEST":
      return {
        ...state,
        toggleRequest: !state.toggleRequest,
      };
    case "SET_NEW_ROOM":
      return {
        ...state,
        allChatsRooms: [...state.allChatsRooms, action.payload],
      };

    case "SET_ROOM_TO_DISPLAY":
      return {
        ...state,
        roomDisplayed: action.payload,
      };
    case "UPDATE_CURRENT_ROOM_MESSAGE":
      return {
        ...state,
        roomDisplayed: {
          ...state.roomDisplayed,
          history: [...state.roomDisplayed.history, action.payload],
        },
      };

    default: {
      return state;
    }
  }
};
