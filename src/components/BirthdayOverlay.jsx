import { motion, AnimatePresence } from "framer-motion";
import HappyBrithday from "../assets/images/happybrithday.gif";

export default function BirthdayOverlay({ isUnlocked, onNext }) {
  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200/70 to-purple-300/70 backdrop-blur-xl z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
          >
            {/* GIF */}
            <motion.img
              src={HappyBrithday}
              className="w-full md:w-[35vw] max-w-[500px] drop-shadow-xl"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onNext}
              className="bg-black text-white px-10 py-3 rounded-full font-semibold shadow-2xl"
            >
              NEXT →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}