import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/main/MyMain";
import MyEdit from "./components/main/editPage/MyEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/edit" element={<MyEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
