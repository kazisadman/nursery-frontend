import Category from "../components/home/Category";
import Collection from "../components/home/Collection";
import Hero from "../components/home/Hero";
import PhotoGallary from "../components/home/PhotoGallary";
import Search from "../components/home/Search";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Search></Search>
      <Category></Category>
      <Collection></Collection>
      <PhotoGallary></PhotoGallary>
    </div>
  );
};

export default Home;
