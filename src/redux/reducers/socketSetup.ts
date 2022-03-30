// import { useNavigate } from "react-router-dom"

interface INewChat {
    chatId:string,
    message :string
}
export default function socketSetup(socket:any) {
    // const navigate = useNavigate()
    socket.on("connection",()=>{console.log('connection established!')})
    socket.on("JWT_ERROR", () => console.log("JWT_ERROR"))
    socket.on("incoming-msg",({ chatId, message}:INewChat) =>{
      // store.dispatch a NEW_MESSAGE action, the payload will be { chatId, message}
    })
    socket.on("disconnect", ()=>{})
}