import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

function UsersList() {
  const [allUsers, setAllUsers] = useState();
  const myToken = localStorage.getItem("MyAToken");
  const accessToken = JSON.parse(JSON.stringify(myToken));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      fetchChats(accessToken);
    }
  }, []);

  const fetchChats = async (token: string) => {
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/users`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      if (res.ok) {
        let data = await res.json();
        setAllUsers(data);
        console.log(data);
      } else {
        console.log("fetch users failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <div className="users-btn-div">
        <Avatar alt="Remy Sharp" src="{user.avatar}" />
        <h6 className="text-light mb-0 ml-2"> usrname</h6>
        <p className="mb-0 msg-sent-time text-muted ml-auto">09:99</p>
      </div>
    </div>
  );
}

export default UsersList;

// {
//   allUsers?.map((user, i) => {
//     return (
//       <div
//         key={i}
//         className="users-btn-div"
//         onClick={() => setSelected(!selected)}
//       >
//         <Avatar alt="Remy Sharp" src={user.avatar} />
//         <h6 className="text-light mb-0 ml-2"> {user.username}</h6>
//         <p className="mb-0 msg-sent-time text-muted ml-auto">
//           {user.updatedAt}
//         </p>
//       </div>
//     );
//   });
// }
