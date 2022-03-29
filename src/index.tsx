import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <Container className="m-0 p-0 position-relative" fluid>
      <App />
    </Container>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
