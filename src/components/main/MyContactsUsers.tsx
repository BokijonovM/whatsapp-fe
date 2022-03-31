import React, { useState, useEffect } from "react";
import { IChatArray } from "../../types/IChat";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAction } from "../../redux/actions/index";
import { IInitialState } from "../../types/initial";
import Moment from "moment";
import Avatar from "@mui/material/Avatar";

function MyContactsUsers() {
  const [allChats, setAllChats] = useState<IChatArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState(false);
  const myToken = localStorage.getItem("MyAToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state) => (state as IInitialState).selection.selectedUser
  );
  const fetchOnline = async () => {
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
  useEffect(() => {
    fetchOnline();
  }, []);
  return (
    <div>
      {isLoading
        ? ""
        : allChats?.map((user, i) => {
            return (
              <div
                key={i}
                className={
                  selectedUser?.user._id == user._id
                    ? "users-btn-divSel py-3"
                    : "users-btn-div py-3"
                }
                // className="users-btn-div py-3"
                onClick={() => {
                  dispatch(selectUserAction(user.members[1]));
                  setSelected(true);
                }}
              >
                <Avatar alt="Remy Sharp" src={user.members[1].avatar} />
                <h6 className="text-light mb-0 ml-2">
                  {user.members[1].username}
                </h6>
                <p className="mb-0 msg-sent-time text-muted ml-auto">
                  {Moment(user.members[1].updatedAt).format("HH:mm")}
                  {/* {user.updatedAt} */}
                </p>
              </div>
            );
          })}
    </div>
  );
}

export default MyContactsUsers;
