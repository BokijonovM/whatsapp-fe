import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col, Form } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import logoW from "./whats.png";
import MySetting from "../settingProfile/MySetting";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MicIcon from "@mui/icons-material/Mic";
import LockIcon from "@mui/icons-material/Lock";
import MySearch from "./MySearch";
import { AChatsArray, IUser } from "../../types/IUser";
import { useNavigate } from "react-router-dom";
import {
  setUsernameAction,
  setUserAvatarAction,
  setUserEmailAction,
  setUserRefreshTokenAction,
  selectUserAction,
  setInitSocketAction,
} from "../../redux/actions/index";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AUsersArray } from "../../types/IUser";
import { IInitialState } from "../../types/initial";
import OtherUserInfo from "../UserInfo/OtherUserInfo";
import MyContacts from "./MyContacts";

import io from "socket.io-client";
function MyMain() {
  const [selected, setSelected] = useState(false);
  const [setting, setSetting] = useState(false);
  const [myInfo, setMyInfo] = useState<IUser | null>(null);
  const [allUsers, setAllUsers] = useState<AUsersArray>([]);
  const [allChats, setAllChats] = useState<AChatsArray>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [otherUserInfo, setOtherUserInfo] = useState<boolean>(false);
  const [myContacts, setMyContacts] = useState<boolean>(false);
  const myToken = localStorage.getItem("MyAToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // chats
  const [message, setMessage] = useState<string>("");

  const selectedUser = useSelector(
    (state) => (state as IInitialState).selectedUser
  );
  const username = useSelector(
    (state) => (state as IInitialState).userMe.username
  );
  // useEffect(() => {
  //   );

  //socket io
  // const ADDRESS: string = "http://localhost:3001";
  // const socket = io(ADDRESS, { transports: ["websocket"] });

  useEffect(() => {
    if (dataJson) {
      setIsLoggedIn(true);
      console.log(dataJson);
      fetchMe(dataJson);
      fetchUsers(dataJson);
      // fetchChats(dataJson);

      dispatch(setInitSocketAction(dataJson));
    }
  }, []);

  const fetchMe = async (token: string) => {
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/users/me`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setMyInfo(data.user);
        dispatch(setUsernameAction(data.user.username));
        dispatch(setUserAvatarAction(data.user.avatar));
        dispatch(setUserEmailAction(data.user.email));
        dispatch(setUserRefreshTokenAction(data.user.refreshToken));
      } else {
        console.log("fetch me failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async (token: string) => {
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/users`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      if (res.ok) {
        let data = await res.json();
        setAllUsers(data.users);
        console.log(data);
        setIsLoading(false);
      } else {
        console.log("fetch users failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postChats = async (resId: string) => {
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/chats`, {
        method: "POST",
        body: JSON.stringify({ recipient: resId }),
        headers: {
          authorization: dataJson,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log("chats post", data);
        setIsLoading(false);
      } else {
        console.log("fetch users failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {otherUserInfo ? <OtherUserInfo /> : ""}
      <Row className="main-row">
        <Col md={4} className="m-0 p-0">
          <Row className="col-1-row-1-1st-header">
            <Avatar
              onClick={() => setSetting(!setting)}
              alt="Rem Sharp"
              src={myInfo?.avatar}
            />
            <div className="d-flex">
              <RestartAltOutlinedIcon className="header-1-all-icons" />
              <MessageIcon
                className="header-1-all-icons"
                onClick={() => setMyContacts(!myContacts)}
              />
              <MoreVertIcon className="header-1-all-icons" />
            </div>
          </Row>
          {setting ? (
            <MySetting dataJson={dataJson} />
          ) : (
            <div>
              <Row className="row-form-data-for-search">
                <div className="w-100 px-3">
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      onChange={(e) => setSearchName(e.target.value)}
                      className="form-for-search  shadow-none"
                      type="text"
                      placeholder="Search or start new chat"
                    />
                  </Form.Group>
                </div>
              </Row>
              <Row className="col-1-row-2-active-users ">
                {myContacts ? (
                  <div className="row__posters-1">
                    {isLoading
                      ? ""
                      : allUsers!
                          .filter((value) => {
                            if (searchName === "") {
                              return value;
                            } else if (
                              value.username
                                .toLowerCase()
                                .includes(searchName.toLowerCase())
                            ) {
                              return value;
                            }
                          })
                          .map((user, i) => {
                            return (
                              <div
                                onClick={() => postChats(user._id)}
                                className={
                                  username == user.username ? "d-none" : ""
                                }
                              >
                                <div
                                  key={i}
                                  className={
                                    selectedUser?.user._id == user._id
                                      ? "users-btn-divSel py-3"
                                      : "users-btn-div py-3"
                                  }
                                  // className="users-btn-div py-3"
                                  onClick={() => {
                                    dispatch(selectUserAction(user));
                                    setSelected(true);
                                  }}
                                >
                                  <Avatar alt="Remy Sharp" src={user.avatar} />
                                  <h6 className="text-light mb-0 ml-2">
                                    {" "}
                                    {user.username}
                                  </h6>
                                  <p className="mb-0 msg-sent-time text-muted ml-auto">
                                    {Moment(user.updatedAt).format("HH:mm")}
                                    {/* {user.updatedAt} */}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                  </div>
                ) : (
                  <MyContacts />
                )}
              </Row>
            </div>
          )}
        </Col>

        {selectedUser ? (
          <Col md={8} className="m-0 p-0">
            <Row className="col-2-row-1-2nd-header">
              <div
                className="d-flex align-items-center"
                onClick={() => setOtherUserInfo(!otherUserInfo)}
              >
                <Avatar
                  className="mr-2"
                  alt="Remy Sharp"
                  src={selectedUser?.user.avatar}
                />
                <h6 className="mb-0 text-light">
                  {selectedUser?.user.username}
                </h6>
              </div>
              <div className="d-flex">
                <MySearch />
                <MoreVertIcon className="header-1-all-icons" />
              </div>
            </Row>
            <Row className="col-2-row-2-msg-dis-player">
              <div className="row__posters">
                <p className="mb-0 text-light today-msg-date-text">
                  {Moment(selectedUser?.user.createdAt).format("DD/MM/YYYY")}
                </p>
                <p className="mb-0 today-security-info-text mx-5">
                  <LockIcon fontSize="small" />
                  Messages are end-to-end encrypted. No one outside of this
                  chat, not even WhatsApp, can read or listen to them. Click to
                  lear more.
                </p>
                <p className="my-messages-text mb-0">my message</p>
                <p className="other-messages-text mb-0">other msg</p>
              </div>
            </Row>
            <Row className="col-2-row-3-type-msg">
              <InsertEmoticonIcon className="text-light" />
              <AttachmentIcon className="text-light" />
              <Form.Group controlId="formBasicText">
                <Form.Control
                  className="form-for-msg  shadow-none"
                  type="text"
                  placeholder="Type a message"
                />
              </Form.Group>
              <MicIcon className="text-light" />
            </Row>
          </Col>
        ) : (
          <Col md={8} className="m-0 p-0">
            <img
              className="whatsapp-no-select-yet"
              src={logoW}
              alt="whatsapp"
            />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default MyMain;
