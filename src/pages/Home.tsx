import Hero from "../components/home/Hero";
import Search from "../components/home/Search";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Search></Search>
    </div>
  );
};

export default Home;
