import * as actionTypes from "./actionTypes"

export function addUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    user,
  }

  return simulateHttpRequest(action)
}


