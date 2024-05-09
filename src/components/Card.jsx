import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdVolumeHigh } from "react-icons/io";
import { SlBulb } from "react-icons/sl";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdRefresh,
  IoIosArrowDown,
  IoIosAddCircle,
} from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleflip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center pt-10">
        <ul className="flex flex-row md:gap-14 gap-8 text-base md:text-xl text-gray-500 py-5">
          <a
            href="/"
            className="underline underline-offset-8 text-blue-800 font-semibold"
          >
            Study
          </a>
          <a href="/">Quiz</a>
          <a href="/">Test</a>
          <a href="/">Game</a>
          <a href="/">Others</a>
        </ul>
      </div>
      <div className="flex items-center justify-center  cursor-pointer">
        <div
          className="flip-card w-[600px] h-[360px] rounded-md m-2"
          onClick={handleflip}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-[3rem] p-4 bg-gradient-to-r from-sky-600 to-sky-800">
              <div className="flex justify-between p-4">
                <div className="">
                  <SlBulb className="text-3xl text-white" />
                </div>
                <div>
                  <IoMdVolumeHigh className="text-3xl text-white" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-20">
                <h1 className="font-medium text-3xl text-white">5x + 12</h1>
              </div>
            </div>
            <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-[3rem] p-4 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex justify-between p-4">
                <div className="">
                  <SlBulb className="text-3xl text-white" />
                </div>
                <div>
                  <IoMdVolumeHigh className="text-3xl text-white" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-20">
                <h1 className="font-medium text-3xl text-white">
                  9 + 6 + 7x - 2x - 3
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center  items-center pt-5">
        <div className="flex flex-row md:gap-14 gap-8 text-base md:text-xl text-gray-500 py-5">
          <div>
            <IoMdRefresh className="text-3xl md:text-4xl text-blue-800" />
          </div>
          <div>
            <IoIosArrowDropleftCircle className="text-4xl md:text-6xl text-blue-800 " />
          </div>
          <div>
            <h1 className="md:text-2xl text-xl font-semibold ">01/10</h1>
          </div>
          <div>
            <IoIosArrowDroprightCircle className="md:text-6xl text-4xl text-blue-800" />
          </div>
          <div>
            <RiFullscreenLine className="text-3xl md:text-4xl text-blue-800 " />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:justify-between md:flex-row flex-col items-center pt-5">
        <div className="flex gap-2 p-4">
          <div className="shadow-md shadow-black rounded-full ">
            <IoIosArrowDown className="text-7xl " />
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-gray-500">Published by</p>
            <h1 className="md:text-3xl text-2xl text-blue-800">
              Hygge<span className="font-bold">X</span>
            </h1>
          </div>
        </div>
        <div className="flex gap-2 p-4">
          <div className=" ">
            <IoIosAddCircle className="text-6xl text-blue-800" />
          </div>
          <div className="mt-4">
            <p className="text-2xl  font-bold text-blue-800">
              Create Flashcard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
