import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeLayout from "./pages/homePage/pageLayout/homeLayout";
import {SignUpLayout} from "./pages/signUpPage/SignUpLayout.tsx";
import {PricingLayout} from "./pages/pricingPage/PricingLayout.tsx";
import {LoginPageLayout} from "./pages/signUpPage/LoginPageLayout.tsx";
import {ProductDashboard} from "./pages/ProductDashboard/ProductDashboardLayout.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/login" element={<LoginPageLayout />} />
              <Route path="/signup" element={<SignUpLayout />} />
              <Route path="/pricing" element={<PricingLayout />} />
              <Route path="/products/dashboard" element={<ProductDashboard />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;


