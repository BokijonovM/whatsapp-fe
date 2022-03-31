// import { useNavigate } from "react-router-dom"

import { Store } from "@mui/icons-material"
import { INewChat } from "../../types/IMsg"


export default function socketSetup(socket:any) {
    // const navigate = useNavigate()
    socket.on("connection",()=>{console.log('connection established!')})
    socket.on("JWT_ERROR", () => console.log("JWT_ERROR"))
    socket.on("incoming-msg",(message:INewChat) =>{
      // store.dispatch  NEW_MESSAGE action, the payload will be { chatId, message}

    })
    socket.on("disconnect", ()=>{})
}