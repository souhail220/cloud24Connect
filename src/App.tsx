import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./shared/footer/footer";
import HomeLayout from "./pages/homePage/pageLayout/homeLayout";

function App() {
  return (
    <div className="main-content">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HomeLayout />
      <Footer />
    </div>
  );
}

export default App;
