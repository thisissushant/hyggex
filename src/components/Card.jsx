import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center h-[800px] cursor-pointer">
      <div
        className="flip-card w-[600px] h-[360px] rounded-md"
        onClick={handleflip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4">
            <h1>Hello</h1>
            <p>Live hu mai</p>
          </div>
          <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4">
            <h1>From Back</h1>
            <p>Live hu mai from back</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
