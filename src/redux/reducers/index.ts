

import { RootState } from '../store'
import { AppDispatch } from '../store'

const userReducer = (state:RootState, action:AppDispatch) => {
 
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  
}

export default userReducer
