import { ThunkAction,ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { RootState } from '../store'
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";

export const login = 
(email:string, password:string)
:ThunkAction<Promise<void>,RootState,unknown,AnyAction > => 
async (dispatch:ThunkDispatch<RootState,unknown,AnyAction>):Promise<void> => {
  try {
    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
     const res=await fetch('https://whatsapp-clone-epicode.herokuapp.com/users/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data =await res.json();
    const userData={firstName:data.first_name,lastName:data.last_name}
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload:userData,
    });

  } catch (error) {
    console.log(error)
  }
};
