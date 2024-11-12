import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#3A403E]">
      <div className="max-w-7xl mx-auto text-white">
        <div className="py-7">
          <img
            src="https://i.ibb.co.com/BGk2P87/Footer-Logo.png"
            alt="Footer Logo"
          />
        </div>
        <div className="flex justify-evenly items-center">
          <div>
            <p className="mb-4">Contact Us</p>
            <p>greener@gmail.com</p>
            <p>+880123456789</p>
          </div>
          <div>
            <p className="mb-4">Important Links</p>
            <p>Shop</p>
            <p>Search Plant</p>
          </div>
          <div className="flex gap-5">
            <p>Follow Us On:</p>
            <FaInstagram className="text-xl"></FaInstagram>
            <FaFacebook className="text-xl"></FaFacebook>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white my-4"></div>
        <div className="flex gap-3">
            <a href="">Privacy policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Cookie Prefrence</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
