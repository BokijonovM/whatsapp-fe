import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import encryptTransform from "redux-persist-transform-encrypt";
import { IInitialState } from "../../types/initial";
import userReducer from "../reducers/myReducer";
import { SingleUserReducer } from "../reducers/SelectedUser";

const aComposeFunctionThatAlwaysWorks =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: IInitialState | any = {
  userMe: {
    username: "",
    email: "",
    avatar: "",
    refreshToken: "",
    socket: "",
    _id:""
  },
  selection:{

    selectedUser: null,
    activeChatId: "",
    allChats:[]
    // socket: null,
    // chat: {
      //   selected: null,
      //   chatList: [],
      // },
    }
};

const bigReducer = combineReducers({
  userMe: userReducer,
  selection: SingleUserReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

export { configureStore };
