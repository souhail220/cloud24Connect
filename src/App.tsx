import './App.css'
import Navbar from "./components/navbar";
import Featurecard from "./components/featurecard";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      
      <Navbar />
      <div className='h-3000px'><HeroSection /></div>
      <div className=''><Featurecard /></div>
    
    </>
  );
}

export default App;

