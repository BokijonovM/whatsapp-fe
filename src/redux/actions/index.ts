import {ThunkAction,ThunkDispatch} from 'redux-thunk'
import { AnyAction } from 'redux';
import { RootState } from '../store'
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const login = 
(email:string, password:string)
:ThunkAction<Promise<void>,RootState,unknown,AnyAction > => 
async (dispatch:ThunkDispatch<RootState,unknown,AnyAction>):Promise<void> => {
  try {
    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
    await fetch('https://whatsapp-clone-epicode.herokuapp.com/users/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })

  } catch (error) {
    console.log(error)
  }
};
