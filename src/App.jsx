import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/global/Button";
import Navbar from "./components/global/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/global/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Navbar  />
    <HeroSection />
      <Button
        className={"px-6"}
        variant="secondary" 
        onClickFn={() => {
          console.log("Hi its rijju");
        }}
      >
        Rijju
      </Button>
      </BrowserRouter>
    </>
  );
}

export default App;
