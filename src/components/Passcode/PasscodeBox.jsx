import { motion } from "framer-motion";

export default function PasscodeBox({ passcode = "" }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array(6)
        .fill("")
        .map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              animate={{ scale: passcode[i] ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-12 h-12
                bg-white/90
                rounded-xl
                flex items-center justify-center
                text-black text-xl font-bold
                shadow-md
              "
            >
              {passcode[i] || ""}
            </motion.div>

            {(i === 1 || i === 3) && (
              <span className="text-white text-2xl font-bold">
                /
              </span>
            )}
          </div>
        ))}
    </div>
  );
}