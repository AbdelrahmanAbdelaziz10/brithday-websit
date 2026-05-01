import { motion, AnimatePresence } from "framer-motion";
import HappyBrithday from "../assets/images/happybrithday.gif";

export default function BirthdayOverlay({ isUnlocked }) {
  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200/70 to-purple-300/70 backdrop-blur-xl z-50"
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex items-center gap-10"
          >
            <motion.img
              src={HappyBrithday}
              className="w-[35vw] drop-shadow-xl"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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