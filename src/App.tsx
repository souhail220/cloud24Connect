import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeLayout from "./pages/homePage/pageLayout/homeLayout";
import {Login} from "./pages/signUpPage/Login.tsx";
import {SignUp} from "./pages/signUpPage/SignUp.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;


