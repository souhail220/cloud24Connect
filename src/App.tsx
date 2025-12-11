import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeLayout from "./pages/homePage/pageLayout/homeLayout";
import {SignUpLayout} from "./pages/signUpPage/SignUpLayout.tsx";
import {Pricing} from "./pages/pricingPage/Pricing.tsx";
import {LoginPageLayout} from "./pages/signUpPage/LoginPageLayout.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/login" element={<LoginPageLayout />} />
              <Route path="/signup" element={<SignUpLayout />} />
              <Route path="/pricing" element={<Pricing />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;


