import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Connectwithme from "./components/Connectwithme";
import Technologies from "./components/Technologies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainDiv bg-black">
      <Navbar />
      <About />
      <Projects />
      <Technologies />
      <Connectwithme />
      <Footer />
    </div>
  );
}

export default App;
