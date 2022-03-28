import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginpage from "./components/Loginpage";
import Registerpage from "./components/Registerpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registerpage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
