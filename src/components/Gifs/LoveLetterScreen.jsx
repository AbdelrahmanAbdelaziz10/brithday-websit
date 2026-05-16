import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image1 from "../../assets/images/1.jpeg";
import Image2 from "../../assets/images/2.jpeg";
import Image3 from "../../assets/images/3.jpeg";

export default function LoveLetterScreen({ onBack }) {
  const [open, setOpen] = useState(false);
const images = [Image1, Image2, Image3];

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);

    return () => clearTimeout(timer);
  }, []);

  const sparkles = [
    { top: "7%", left: "8%", size: 16, delay: 0 },
    { top: "14%", right: "10%", size: 13, delay: 0.5 },
    { bottom: "22%", left: "5%", size: 14, delay: 1 },
    { bottom: "14%", right: "7%", size: 12, delay: 0.3 },
    { top: "42%", left: "3%", size: 10, delay: 0.8 },
    { top: "32%", right: "4%", size: 11, delay: 1.3 },
  ];

  return (
    <motion.div
      key="letter-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(135deg,#ec4899 0%,#ec4899 50%,#d8a2c4 100%)",
      }}
    >
      {/* Sparkles */}
      {sparkles.map((sparkle, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: sparkle.delay,
          }}
          className="absolute text-white/70 pointer-events-none"
          style={{
            ...sparkle,
            fontSize: sparkle.size,
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* Love Bubble */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 130,
        }}
        className="absolute top-[3%] left-[45%] -translate-x-1/2 z-50"
      >
        <div className="relative bg-white px-6 rounded-3xl shadow-2xl">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 32,
              color: "#ec4899",
            }}
          >
            love you
          </h2>

          <div className="flex justify-center gap-1 mt-1">
            {["♥", "♥", "♥", "♥"].map((heart, i) => (
              <span key={i} className="text-pink-400 text-xs">
                {heart}
              </span>
            ))}
          </div>

          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "14px solid white",
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-end justify-center gap-10 w-full max-w-6xl mt-10">

        {/* Photos */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            rotate: -12,
          }}
          animate={
            open
              ? {
                  opacity: 1,
                  x: 0,
                  rotate: -6,
                }
              : {}
          }
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 80,
            damping: 14,
          }}
          className="flex flex-col gap-2"
        >
          {images.map((img, index) => (
  <div
    key={index}
    className="bg-white p-3 rounded-md shadow-2xl w-[180px]"
  >
    <div className="overflow-hidden rounded-sm h-[150px]">
      <img
        src={img}
        alt="memory"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
))}

          <div className="bg-white py-2 rounded-md shadow-xl text-center">
            <span className="text-pink-500 font-bold tracking-widest">
              LOVE ♥
            </span>
          </div>
        </motion.div>

        {/* Envelope + Letter */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "clamp(280px,48vw,450px)",
            minHeight: 420,
          }}
        >

          {/* LETTER */}
          <motion.div
            initial={{
              y: 120,
              opacity: 7,
            }}
            animate={
              open
                ? {
                    y: -55,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 70,
              damping: 11,
            }}
            className="absolute top-[-40%] z-20 w-[95%] max-w-[350px]"
          >

            {/* Stamp */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -25,
              }}
              animate={
                open
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: -10,
                    }
                  : {}
              }
              transition={{
                delay: 1.5,
                type: "spring",
              }}
              className="absolute -top-4 -right-4 z-30 bg-white rounded-lg shadow-xl flex items-center justify-center"
              style={{
                width: 52,
                height: 56,
                border: "2px dashed #d1d5db",
                fontSize: 24,
              }}
            >
              🦋
            </motion.div>

            {/* Paper */}
<div
  className="relative top-[-20%] overflow-hidden rounded-2xl border border-white/40"
  style={{
    background:
      "linear-gradient(180deg,#f8fcff 0%,#ffffff 100%)",
    minHeight: 350,
    boxShadow:
      "0 25px 60px rgba(0,0,0,0.35)",
  }}
>

  {/* Top Glow */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-pink-100/60 to-transparent" />

  {/* Lines */}
  <div className="absolute inset-0 px-8 pt-12">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        style={{
          borderBottom: "1px solid #dbeafe",
          marginBottom: 22,
          height: 1,
        }}
      />
    ))}
  </div>

  {/* Heart */}
  <div className="absolute top-5 left-1/2 -translate-x-1/2 text-pink-300 text-3xl">
    ♥
  </div>

  {/* Text */}
  <div className="relative z-10 px-8 pt-16 pb-10 text-center">

    <h2
      style={{
        fontFamily: "'Great Vibes', cursive",
        fontSize: "clamp(30px,4vw,46px)",
        color: "#ec4899",
      }}
    >
      My Love
    </h2>

    <p
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "clamp(18px,2vw,26px)",
        color: "#374151",
        lineHeight: 1.7,
      }}
    >
      You are my calm,
      <br />
      my happiness,
      <br />
      and my favorite person.
      <br />
      I will always
      <br />
      choose you,
      <br />
      love you,
      <br />
      and stay beside you.
    </p>
  </div>

  {/* Floating Heart */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      y: [0, -5, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.8,
    }}
    className="absolute bottom-5 right-6 text-4xl"
  >
    ❤️
  </motion.div>
</div>
          </motion.div>

          {/* Envelope */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={
              open
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="relative z-10 w-full max-w-[430px]"
          >
            <svg
              viewBox="0 0 430 280"
              className="w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
              xmlns="http://www.w3.org/2000/svg"
            >

              <rect
                x="0"
                y="60"
                width="430"
                height="220"
                rx="18"
                fill="#5bb8e8"
              />

              <path
                d="M0 60 L215 0 L430 60 Z"
                fill="#4aaad8"
              />

              <path
                d="M0 60 L215 0 L430 60 L215 130 Z"
                fill="#3794c4"
                opacity=".3"
              />

              <path
                d="M0 60 L0 280 L180 155 Z"
                fill="#3492c1"
                opacity=".45"
              />

              <path
                d="M430 60 L430 280 L250 155 Z"
                fill="#3492c1"
                opacity=".45"
              />

              <path
                d="M0 280 L180 155 L250 155 L430 280 Z"
                fill="#4aaad8"
                opacity=".8"
              />

              <circle
                cx="215"
                cy="45"
                r="24"
                fill="#ffffff"
                opacity=".95"
              />

              <text
                x="215"
                y="54"
                fontSize="30"
                textAnchor="middle"
                fill="#ec4899"
              >
                ❤
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="absolute cursor-pointer bottom-8 left-1/2 -translate-x-1/2 px-10 py-3 rounded-full border border-white/40 text-white font-bold tracking-widest bg-white/10 backdrop-blur-lg hover:bg-white/20 transition shadow-2xl"
      >
        BACK
      </motion.button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Caveat:wght@500&display=swap');
      `}</style>
    </motion.div>
  );
}