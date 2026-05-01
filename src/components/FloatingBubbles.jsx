import { motion } from "framer-motion";

export default function FloatingBubbles() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-white/30 rounded-full"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity
          }}
        />
      ))}
    </>
  );
}