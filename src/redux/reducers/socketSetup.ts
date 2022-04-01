// import { useNavigate } from "react-router-dom"
import { NEW_MESSAGE } from "../actions"
import { configureStore } from "../store" 



interface IincomingMsg {
    chatId : string,
    message : string
}

export default function socketSetup(socket:any) {
    // const navigate = useNavigate()
    socket.on("connection",()=>{console.log('connection established!')})
    socket.on("JWT_ERROR", () => console.log("JWT_ERROR"))
    socket.on("incoming-msg",({chatId, message} : IincomingMsg) =>{
      // store.dispatch  NEW_MESSAGE action, the payload will be { chatId, message}
         configureStore.dispatch({
             type:NEW_MESSAGE,
             payload:{ chatId, message}
         })
    })
    socket.on("disconnect", ()=>{})
}