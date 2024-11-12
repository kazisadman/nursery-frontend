import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-outFit">
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
