import { motion, AnimatePresence } from "framer-motion";
import HitHeart from "../assets/images/hearthead2.mp4";

export default function LoveQuestion({ onYes, onNo ,title , image , stage ,setStage }) {
  return (
        <AnimatePresence>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white absolute inset-0 flex flex-col items-center justify-center  backdrop-blur-xl z-50"
    >
      {/* Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          font-[Nunito]
          !text-[28px] md:!text-[34px]
          !font-extrabold
          !text-[#6fa8dc]
          text-center
          mb-6
          leading-[1.4]
          tracking-wide
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)]
        "
      >
        {title}
      </motion.h2>

      {/* Image */}
{image.endsWith(".mp4") ? (
  <video autoPlay loop muted playsInline className="w-80 mb-8">
    <source src={image} type="video/mp4" />
  </video>
) : (
  <img src={image} alt="reaction" className="w-80 mb-8" />
)}

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-25"
      >
        {/* YES and NO buttons will go here */  
        stage === "question" ? (
          <> {/* YES */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onYes}
          className="bg-[#6fa8dc] cursor-pointer  text-white px-8 py-2 rounded-full shadow-xl hover:bg-[#5c94cc] transition font-semibold"
        >
          YES
        </motion.button>

        {/* NO */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNo}
          className="bg-[#6fa8dc] cursor-pointer text-white px-8 py-2 rounded-full shadow-xl hover:bg-[#5c94cc] transition font-semibold"
        >
          NO
        </motion.button>
        </>
        ):(
           <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setStage("question")}
          className="bg-[#6fa8dc] text-2xl cursor-pointer underline text-white px-8 py-2 rounded-full shadow-xl  hover:bg-[#5c94cc] transition font-semibold"
        >
          Try Again
        </motion.button>

        )
        }
       
      </motion.div>
    </motion.div>
        </AnimatePresence>
  );
}