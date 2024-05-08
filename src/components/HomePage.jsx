import {} from "react";
import Navbar from "./Navbar";
import { FaChevronRight } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import Card from "./Card";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex justify-between items-center pt-14">
        <h1 className="flex">
          <AiOutlineHome className="h-7 w-7 text-gray-500 " />
          <FaChevronRight className="h-5 w-5 text-gray-500" />
          <span className="text-gray-400 px-2">Flashcard</span>
          <FaChevronRight className="h-5 w-5 text-gray-500" />
          <span className="text-gray-400 px-2">Mathematics</span>
          <FaChevronRight className="h-5 w-5 text-gray-500" />
          <span className="font-semibold text-blue-800 px-2">
            Relation and Function
          </span>
        </h1>
      </div>
      <div className="container mx-auto flex justify-between items-center pt-14">
        <h1 className="text-3xl font-bold text-blue-800">
          Relation and Function ( Mathematics )
        </h1>
      </div>
      <Card />
    </div>
  );
};

export default HomePage;
