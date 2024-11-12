import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" bg-secondaryColor">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <div>
          <h1 className="text-[64px] font-medium mb-4">
            Life Is More <span className="text-text">Green</span> <br /> With
            <span className="text-text"> Greener</span>
          </h1>
          <h3 className="text-2xl my-5 text-gray-500">
            Stay Positive, Stay Green
          </h3>
          <div className="btn flex gap-1 items-center max-w-40 bg-primaryColor text-white ">
            <a href="">Discover</a>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
        <div>
          <img
            className="max-w-[700px]"
            src="https://i.ibb.co.com/Cw7vtHb/Hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
