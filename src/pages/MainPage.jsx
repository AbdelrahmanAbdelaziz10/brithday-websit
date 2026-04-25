import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeimage from "../assets/images/1.jpeg";

export default function MainPage() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleDelete = () => {
    if (isUnlocked) return;
    setPasscode((prev) => prev.slice(0, -1));
  };

  const handleClick = (num) => {
    if (isUnlocked) return;

    if (num === "#") {
      handleDelete();
      return;
    }

    if (typeof num !== "number") return;

    setPasscode((prev) => {
      const updated = prev + num;

      if (updated.length === 8) {
        setTimeout(() => {
          setIsUnlocked(true);
        }, 300); // delay بسيط قبل الـ animation
      }

      return updated.length <= 8 ? updated : prev;
    });
  };

  const numbers = [1,2,3,4,5,6,7,8,9,"*",0,"#"];

  const isComplete = passcode.length === 8;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6fa8dc] to-[#8ec5fc] flex items-center justify-center relative overflow-hidden">

      {/* 🔓 Unlock Overlay */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="text-5xl text-white font-bold"
            >
              🔓 Unlocked 💖
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white mt-4 text-lg"
            >
              Welcome Back...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row items-center gap-15">

        {/* 🖼 Image Card */}
       <motion.div
  initial={{ rotate: -6, opacity: 0, y: 40 }}
  animate={{
    rotate: isUnlocked ? 8 : -2,
    scale: isUnlocked ? 1.3 : 1,
    opacity: isUnlocked ? 0 : 1,
    y: isUnlocked ? -50 : 0
  }}
  whileHover={
    !isUnlocked
      ? { rotate: 0, scale: 1.05 }
      : {}
  }
  transition={{ duration: 0.8 }}
  className="relative mr-10 bg-white p-4 rounded-2xl shadow-2xl"
>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl z-20">
            🎀
          </div>

          <img
            src={homeimage}
            alt="memory"
            className="w-[350px] h-[370px] object-cover rounded-md"
          />

          <p className="text-center mt-10 text-gray-700 font-semibold text-lg">
            My Angel 💖
          </p>
 {/* 🧸 Stitch */}
          <motion.img
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            src="https://pngimg.com/uploads/stitch/stitch_PNG15.png"
            alt="stitch"
            className="w-38 absolute -bottom-17 -left-20 z-30 drop-shadow-xl"
          />

        </motion.div>
        

        {/* 🔢 Passcode Section */}
        <div className="text-center text-white">

          <h2 className="text-2xl mb-10 font-bold">
            Enter a Passcode
          </h2>

          {/* 🔲 Boxes */}
          <div className="flex justify-center gap-4 mb-6">
            {Array(8).fill("").map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: passcode[i] ? 1.1 : 1,
                }}
                className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center text-black font-bold shadow-md"
              >
                {passcode[i] ? "●" : ""}
              </motion.div>
            ))}
          </div>

          {/* 🔢 Keypad */}
          <div className="grid grid-cols-3 gap-2 w-[250px] mx-auto">
            {numbers.map((num, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleClick(num)}
                className={`rounded-full w-14 h-14 text-lg font-semibold shadow-lg
                  ${num === "#" ? "bg-white text-black" : "bg-white text-black"}
                `}
              >
                {num === "#" ? "⌫" : num}
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}