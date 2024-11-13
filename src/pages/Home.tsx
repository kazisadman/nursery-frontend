import Category from "../components/home/Category";
import Collection from "../components/home/Collection";
import Hero from "../components/home/Hero";
import PhotoGallary from "../components/home/PhotoGallary";
import Search from "../components/home/Search";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Search></Search>
      <Category></Category>
      <Collection></Collection>
      <PhotoGallary></PhotoGallary>
    </div>
  );
};

export default Home;
