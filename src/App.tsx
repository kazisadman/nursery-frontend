import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import useSetCategoryNames from "./hooks/useSetCategoryNames";

function App() {
  useSetCategoryNames();
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-outFit">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
