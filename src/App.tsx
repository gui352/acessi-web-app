import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { RegisterUser } from "./pages/RegisterUser/RegisterUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
