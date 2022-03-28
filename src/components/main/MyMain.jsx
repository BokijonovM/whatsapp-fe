import React, { useState } from "react";
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

function MyMain() {
  const [selected, setSelected] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div>
      <Row className="main-row">
        <Col md={4} className="m-0 p-0">
          <Row className="col-1-row-1-1st-header">
            <Avatar
              onClick={() => setSetting(!setting)}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
            <div className="d-flex">
              <RestartAltOutlinedIcon className="header-1-all-icons" />
              <MessageIcon className="header-1-all-icons" />
              <MoreVertIcon className="header-1-all-icons" />
            </div>
          </Row>
          {setting ? (
            <MySetting />
          ) : (
            <div>
              <Row className="row-form-data-for-search">
                <div className="w-100 px-3">
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      className="form-for-search  shadow-none"
                      type="text"
                      placeholder="Search or start new chat"
                    />
                  </Form.Group>
                </div>
              </Row>
              <Row className="col-1-row-2-active-users">
                <div
                  className="users-btn-div"
                  onClick={() => setSelected(!selected)}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  />
                  <h6 className="text-light mb-0 ml-2"> username surname</h6>
                  <p className="mb-0 msg-sent-time text-muted ml-auto">09:19</p>
                </div>
              </Row>
            </div>
          )}
        </Col>

        {selected ? (
          <Col md={8} className="m-0 p-0">
            <Row className="col-2-row-1-2nd-header">
              <div className="d-flex align-items-center">
                <Avatar
                  className="mr-2"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <h6 className="mb-0 text-light">username</h6>
              </div>
              <div className="d-flex">
                <SearchIcon className="header-1-all-icons" />
                <MoreVertIcon className="header-1-all-icons" />
              </div>
            </Row>
            <Row className="col-2-row-2-msg-dis-player">
              <div className="row__posters">
                <p className="mb-0 text-light today-msg-date-text">Today</p>
                <p className="mb-0 today-security-info-text mx-5">
                  <LockIcon fontSize="small" />
                  Messages are end-to-end encrypted. No one outside of this
                  chat, not even WhatsApp, can read or listen to them. Click to
                  lear more.
                </p>
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
