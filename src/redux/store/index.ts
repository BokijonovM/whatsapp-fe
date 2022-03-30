import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import encryptTransform from "redux-persist-transform-encrypt";
import { IInitialState } from "../../types/initial";
import userReducer from "../reducers/myReducer";
import selectedUserReducer from "../reducers/SelectedUser";

const aComposeFunctionThatAlwaysWorks =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: IInitialState = {
  userMe: {
    username: "",
    email: "",
    avatar: "",
    refreshToken: "",
  },
  selectedUser: {
    username: "",
    email: "",
    avatar: "",
  },
};

const bigReducer = combineReducers({
  userMe: userReducer,
  selectedUser: selectedUserReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

export { configureStore };
