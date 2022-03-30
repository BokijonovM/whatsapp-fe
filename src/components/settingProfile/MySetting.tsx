import React from "react";
import "./style.css";
import { Row, Col, Form } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../types/IUser";
import { IInitialState } from "../../types/initial";

function MySetting() {
  const username = useSelector(
    (state) => (state as IInitialState).userMe.username
  );
  const avatarMe = useSelector(
    (state) => (state as IInitialState).userMe.avatar
  );
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
          <div className="user-full-name-div">
            <h6 className="text-light mb-0">{username}</h6>
            <EditIcon className="text-light" />
          </div>
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
