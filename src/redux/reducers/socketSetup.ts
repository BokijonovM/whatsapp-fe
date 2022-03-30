interface INewChat {
    chatId:string,
    message :string
}
export default function socketSetup(socket:any) {
    socket.on("connection",()=>{console.log('connection established!')})
    socket.on("incoming-msg",({ chatId, message}:INewChat) =>{
      // store.dispatch a NEW_MESSAGE action, the payload will be { chatId, message}
    })
    socket.on("disconnect", ()=>{})
}