import { motion } from "framer-motion";

export default function NumberButton({ num, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => onClick(num)}
      className="rounded-full w-14 h-14 text-lg font-semibold shadow-lg bg-white text-black hover:bg-gray-200"
    >
      {num === "#" ? "⌫" : num}
    </motion.button>
  );
}