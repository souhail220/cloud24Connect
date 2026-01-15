import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./shared/ErrorBoundary/ErrorBoundary.tsx";
import {ProductDetailsLayout} from "./pages/ProductDetails/ProductDetailsLayout.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";

const HomeLayout = lazy(() => import("./pages/homePage/pageLayout/homeLayout"));
const SignUpLayout = lazy(() => import("./pages/signUpPage/SignUpLayout.tsx"));
const PricingLayout = lazy(() => import("./pages/pricingPage/PricingLayout.tsx"));
const LoginPageLayout = lazy(() => import("./pages/signUpPage/LoginPageLayout.tsx"));
const ProductDashboard = lazy(() => import("./pages/ProductDashboard/ProductDashboardLayout.tsx"));
const DocsLayout = lazy(() => import("./pages/documentationPage/./DocHomePage"));

function App() {
  return (
      <ThemeProvider>
      <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-white">Loading...</div>}>
          <ErrorBoundary>
              <Routes>
                  <Route path="/" element={<HomeLayout />} />
                  <Route path="/login" element={<LoginPageLayout />} />
                  <Route path="/signup" element={<SignUpLayout />} />
                  <Route path="/pricing" element={<PricingLayout />} />
                  <Route path="/products/dashboard" element={<ProductDashboard />} />
                  <Route path="/products/:productId" element={<ProductDetailsLayout />} />
                  <Route path="/docs" element={<DocsLayout />} />
              </Routes>
          </ErrorBoundary>
      </Suspense>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;


