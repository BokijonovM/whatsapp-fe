import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import encryptTransform from "redux-persist-transform-encrypt";
import reducerLib from "../reducer/index";
// import expireReducer from "redux-persist-expire";

export const initialState = {
  user: {
    isLogged: false,
    userData: {},
  },
  chat: {
    allChatsRooms: [],
    roomDisplayed: [],
    toggleRequest: false,
  },
};

export const groupedReducers = combineReducers({
  user: reducerLib.userReducer,
  chat: reducerLib.chatReducer,
});

// const reducerExpireDate = 48 * 60 * 60 * 1000;
const configPersistance: any = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY as string,
    }),
  ],
};
// const configPersistance = {
//   key: "root",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_REDUX_STORAGE_SECRET_KEY,
//     }),
// expireReducer("user", {
//   expireSeconds: reducerExpireDate,
// }),
//   ],
// };

export const persistedReducer = persistReducer(
  configPersistance,
  groupedReducers
);

const useThunk = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const configureStore = createStore(persistedReducer, initialState, useThunk);

export const persistor = persistStore(configureStore);
export default configureStore;
