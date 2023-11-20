import { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
