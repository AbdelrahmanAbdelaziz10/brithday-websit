import { motion } from "framer-motion";

export default function PasscodeBox({ passcode }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      {Array(6).fill("").map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: passcode[i] ? 1.1 : 1 }}
          className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center text-black font-bold shadow-md"
        >
          {passcode[i] ? passcode[i] : "*"}
        </motion.div>
      ))}
    </div>
  );
}