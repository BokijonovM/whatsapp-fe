import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "../reducers" 
import { IInitialState } from "../Types/Interface"
// import { configureStore } from "@reduxjs/toolkit";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// const aComposeFunctionThatAlwaysWorks =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {}
const middleware=[thunk]

  const reducers = combineReducers({
    userReducer
  })
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; 
