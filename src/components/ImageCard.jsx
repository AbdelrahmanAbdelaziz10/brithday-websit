import { motion } from "framer-motion";
import homeimage from "../assets/images/MS1_1.jpg";

export default function ImageCard({ isUnlocked }) {
  return (
    <motion.div
      initial={{ rotate: -6, opacity: 0, y: 40 }}
      animate={{
        rotate: isUnlocked ? 10 : -2,
        scale: isUnlocked ? 1.2 : 1,
        opacity: isUnlocked ? 0 : 1,
      }}
      whileHover={!isUnlocked ? { scale: 1.05, rotate: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative bg-white p-4 rounded-2xl shadow-2xl"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">
        🎀
      </div>

      <img
        src={homeimage}
        alt="memory"
        className="w-[400px] h-[380px] object-cover rounded-md"
      />

      <p className="text-center mt-6 text-gray-700 font-semibold text-lg">
        My Angel 💖
      </p>
      {/* 🧸 Stitch */}
<motion.img
  initial={{ scale: 0, rotate: -20 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ delay: 0.3 }}
  src="https://pngimg.com/uploads/stitch/stitch_PNG15.png"
  alt="stitch"
  className="
    w-32 md:w-38
    absolute
    -bottom-14 md:-bottom-17
    -left-8 md:-left-20
    z-30
    drop-shadow-xl
  "
/>
    </motion.div>
  );
}