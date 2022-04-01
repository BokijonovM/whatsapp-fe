import React, { useState, useEffect } from "react";
import { IChatArray } from "../../types/IChat";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserAction,
  setActiveChatAction,
} from "../../redux/actions/index";
import { IInitialState } from "../../types/initial";
import Moment from "moment";
import Avatar from "@mui/material/Avatar";

function MyContactsUsers() {
  const [allChats, setAllChats] = useState<IChatArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState();
  const myToken = localStorage.getItem("MyAToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state) => (state as IInitialState).selection.selectedUser
  );

  const userMe = useSelector((state) => (state as IInitialState).userMe);

  const fetchChatHistory = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/chats`, {
        method: "GET",
        headers: {
          authorization: dataJson,
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log("all chats", data);
        setAllChats(data.messages);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOnline = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_PROD_API_URL}/online-users`,
        {
          method: "GET",
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        console.log("all fetchOnline users", data);
        setOnlineUsers(data.messages);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOnline();
    fetchChatHistory();
  }, []);
  return (
    <div>
      {isLoading
        ? ""
        : allChats?.map((chat, i) => {
            return chat.members
              .filter((member) => member._id !== userMe._id)
              .map((member) => (
                <div
                  className={
                    userMe.username === member.username ? "d-none" : ""
                  }
                >
                  <div
                    key={i}
                    className={
                      selectedUser?.username === member.username
                        ? "users-btn-divSel py-3"
                        : "users-btn-div py-3"
                    }
                    // className="users-btn-div py-3"
                    onClick={() => {
                      dispatch(selectUserAction(member));
                      dispatch(setActiveChatAction(chat._id));
                      setSelected(true);
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={member.avatar} />
                    <h6 className="text-light mb-0 ml-2">{member.username}</h6>
                    <p className="mb-0 msg-sent-time text-muted ml-auto">
                      {Moment(chat.members[1].updatedAt).format("HH:mm")}
                      {/* {user.updatedAt} */}
                    </p>
                  </div>
                </div>
              ));
          })}
    </div>
  );
}

export default MyContactsUsers;
