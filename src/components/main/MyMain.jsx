import React from "react";
import "./style.css";
import { Row, Col, Form } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function MyMain() {
  return (
    <div>
      <Row className="main-row">
        <Col md={4} className="m-0 p-0">
          <Row className="col-1-row-1-1st-header">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className="d-flex">
              <RestartAltOutlinedIcon className="header-1-all-icons" />
              <MessageIcon className="header-1-all-icons" />
              <MoreVertIcon className="header-1-all-icons" />
            </div>
          </Row>
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
            <div className="users-btn-div">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <h6 className="text-light mb-0 ml-2"> username surname</h6>
              <p className="mb-0 msg-sent-time text-muted ml-auto">09:19</p>
            </div>
            <div className="users-btn-div">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <h6 className="text-light mb-0 ml-2"> username surname</h6>
              <p className="mb-0 msg-sent-time text-muted ml-auto">09:19</p>
            </div>
          </Row>
        </Col>
        <Col md={8} className="m-0 p-0">
          <Row className="col-2-row-1-2nd-header">
            <div className="d-flex align-items-center">
              <Avatar
                className="mr-2"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <h6 className="mb-0 text-light">username</h6>
            </div>
            <div className="d-flex">
              <SearchIcon className="header-1-all-icons" />
              <MoreVertIcon className="header-1-all-icons" />
            </div>
          </Row>
          <Row className="col-2-row-2-msg-dis-player"></Row>
          <Row className="col-2-row-3-type-msg"></Row>
        </Col>
      </Row>
    </div>
  );
}

export default MyMain;
