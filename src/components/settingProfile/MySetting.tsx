import React, { useState } from "react";
import "./style.css";
import { Row, Form } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../../types/initial";
import CheckIcon from "@mui/icons-material/Check";
import { setUsernameAction } from "../../redux/actions/index";

function MySetting({ dataJson }: any) {
  const username = useSelector(
    (state) => (state as IInitialState).userMe.username
  );
  const avatarMe = useSelector(
    (state) => (state as IInitialState).userMe.avatar
  );
  const [isChangeName, setIsChangeName] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(`${username}`);
  const dispatch = useDispatch();
  const handleChangeName = async () => {
    const newUserName = {
      username: newName as string,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_PROD_API_URL}/users/me`, {
        method: "PUT",
        body: JSON.stringify(newUserName),
        headers: {
          authorization: dataJson,
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log("done");
        setIsChangeName(false);
        window.location.reload();
        // window.location.href = "/main";
        dispatch(setUsernameAction(newName));
      } else {
        console.log("edit error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="setting-main-div">
      <Row className="col-1-row-1-1st-header-1">
        <ArrowBackIcon className="text-light mr-4" />
        <h6 className="mb-0 text-light">Profile</h6>
      </Row>
      <Row className="justify-content-center row-2-user-info-cont">
        <div className="w-100">
          <img className="setting-image-user mt-3" src={avatarMe} alt="" />
          <p className="mb-0 your-name-text">Your Name</p>
          {isChangeName ? (
            <div className="user-full-name-div">
              <Form.Group controlId="formBasicText">
                <Form.Control
                  className="shadow-none border-0 bg-transparent pl-0 my-n2"
                  type="text"
                  placeholder={username}
                  onChange={(e) => setNewName(e.target.value)}
                  defaultValue={username}
                />
              </Form.Group>
              <CheckIcon
                className="text-light"
                onClick={() => handleChangeName()}
              />
            </div>
          ) : (
            <div className="user-full-name-div">
              <h6 className="text-light mb-0">{username}</h6>
              <EditIcon
                className="text-light"
                onClick={() => setIsChangeName(true)}
              />
            </div>
          )}

          <div className="">
            <p className="mb-0 text-light some-info-text">
              This is not your username or pin. this name will be visible to
              your WhatsApp contacts.
            </p>
          </div>
          <p className="mb-0 your-name-text">About</p>
          <div className="user-full-name-div">
            <h6 className="text-light mb-0">Hey there! I am using WhatsApp.</h6>
            <EditIcon className="text-light" />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default MySetting;
