import Gallary from "../Gallary";

const PhotoGallary = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto ">
      <div className="flex justify-between items-center gap-20">
        <div>
          <h1 className="text-5xl font-medium">
            Our Commitment to
            <br />
            Green Living
          </h1>
          <p className="text-xl text-gray-500 my-7">
            At our core, we believe in enriching lives through the beauty of
            plants. Our mission is to provide high-quality greenery that fosters
            a sense of well-being and connection to nature.
          </p>
        </div>
        <div className="pb-2 border-2 border-text">
          <Gallary></Gallary>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;
