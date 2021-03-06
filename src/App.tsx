import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Registerpage } from "./components/Registerpage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/main/MyMain";
import Loginpage from "./components/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/main" element={<MyMain />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Loginpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
