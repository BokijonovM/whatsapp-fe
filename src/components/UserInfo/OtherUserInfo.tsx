import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../../types/initial";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Switch from "@mui/material/Switch";
import BlockIcon from "@mui/icons-material/Block";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import DeleteIcon from "@mui/icons-material/Delete";

function OtherUserInfo() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const selectedUser = useSelector(
    (state) => (state as IInitialState).selection.selectedUser
  );
  return (
    <div className="other-user-info-main-div">
      <Row className="user-info-header-row">
        <CloseIcon />
        <h6 className="mb-0 ml-4">Contact info</h6>
      </Row>
      <Row className="row-2-user-info flex-column m-0 p-0">
        <div className="my-4 ">
          <img
            className="selected-user-info-main-image"
            src={selectedUser?.user.avatar}
            alt={selectedUser?.user.username}
          />
          <h5 className="mb-0 mt-3">{selectedUser?.user.username}</h5>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="selected-user-about-part py-3">
          <p className="">About</p>
          <h6 className="mb-0">Hey there! I am using WhatsApp.</h6>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0">Media, links and docs</p>

          <span className="ml-auto">
            0 <ArrowForwardIosIcon fontSize="small" />
          </span>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0">
            <StarIcon className="mx-3" fontSize="small" />
            Starred messages
          </p>

          <span className="ml-auto">
            <ArrowForwardIosIcon fontSize="small" />
          </span>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0">
            <NotificationsIcon className="mx-3" fontSize="small" />
            Mute notifications
          </p>

          <span className="ml-auto">
            <Switch {...label} defaultChecked />
          </span>
        </div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0">
            <AvTimerIcon className="mx-3" fontSize="small" />
            Disappearing messages
          </p>

          <span className="ml-auto">
            <ArrowForwardIosIcon fontSize="small" />
          </span>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0 text-danger">
            <BlockIcon className="mx-3" fontSize="small" />
            Block {selectedUser?.user.username}
          </p>
        </div>
        <div className="media-link-docs w-100 py-3">
          <p className="mb-0 text-danger">
            <ThumbDownAltIcon className="mx-3" fontSize="small" />
            Report {selectedUser?.user.username}
          </p>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="delete-chat-btn w-100 py-3">
          <p className="mb-0 text-danger">
            <DeleteIcon className="mx-3" fontSize="small" />
            Delete chat
          </p>
        </div>
        <div className="className-black-space-needed"></div>
        <div className="className-black-space-needed"></div>
        <div className="className-black-space-needed"></div>
        <div className="className-black-space-needed"></div>
      </Row>
    </div>
  );
}

export default OtherUserInfo;
