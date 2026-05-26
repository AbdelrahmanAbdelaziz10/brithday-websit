import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image1 from "../../assets/images/خروجة 1.jpeg";
import Image2 from "../../assets/images/عيد ميلادي.jpeg";
import Image3 from "../../assets/images/3.jpeg";

import MyVideo from "../../assets/videos/love.mp4";
import MyVideoTwo from "../../assets/videos/love2.mp4";

export default function LoveLetterScreen({ onBack }) {
  const [open, setOpen] = useState(false);

  // videos
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [MyVideoTwo , MyVideo];

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

  // VIDEO SCREEN
  if (showVideo) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[999] bg-black"
      >
        <video
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          controls
          className="w-full h-full object-cover"
          onEnded={() => {
            // play next video automatically
            if (currentVideo < videos.length - 1) {
              setCurrentVideo((prev) => prev + 1);
            }
          }}
        />

        {/* Replay */}
        <button
          onClick={() => {
            setCurrentVideo(0);

            setTimeout(() => {
              const video = document.querySelector("video");
              video?.play();
            }, 100);
          }}
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2
            px-6 py-3 rounded-full
            bg-white/20 backdrop-blur-md
            text-white font-bold
            border border-white/30
            shadow-xl
          "
        >
          Replay ♡
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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

      {/* MAIN */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 w-full max-w-6xl pb-10 lg:pb-0">

        {/* PHOTOS */}
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
          className="
            flex flex-row lg:flex-col
            gap-2
            overflow-x-auto lg:overflow-visible
            w-full lg:w-auto
            pb-4 lg:pb-3
            mb-10 lg:mb-0
            snap-x snap-mandatory
          "
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="
                bg-white p-3 rounded-md shadow-2xl
                w-[160px] lg:w-[180px]
                flex-shrink-0
                snap-center
              "
            >
              <div className="overflow-hidden rounded-sm h-[160px] lg:h-[170px]">
                <img
                  src={img}
                  alt="memory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

          <div className="bg-white py-2 rounded-md shadow-xl text-center w-[160px] flex-shrink-0 lg:w-auto">
            <span className="text-pink-500 font-bold tracking-widest">
              LOVE ♥
            </span>
          </div>
        </motion.div>

        {/* ENVELOPE */}
        <div
          className="relative flex items-center justify-center mt-6 lg:mt-0"
          style={{
            width: "clamp(280px,48vw,450px)",
            minHeight: 420,
          }}
        >
          {/* LETTER */}
             {/* LETTER */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={open ? { y: -55, opacity: 1 } : {}}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 70,
              damping: 11,
            }}
            className="absolute top-[-10%] lg:top-[-40%] z-20 w-[95%] max-w-[350px]"
          >
            {/* Stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={open ? { opacity: 1, scale: 1, rotate: -10 } : {}}
              transition={{ delay: 1.5, type: "spring" }}
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
                background: "linear-gradient(180deg,#f8fcff 0%,#ffffff 100%)",
                minHeight: 350,
                boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-pink-100/60 to-transparent" />

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

              <div className="absolute top-5 left-1/2 -translate-x-1/2 text-pink-300 text-3xl">
                ♥
              </div>

              <div className="relative z-10 px-8 pt-16 pb-10 text-center">
                <h2
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "clamp(30px,4vw,46px)",
                    color: "#ec4899",
                  }}
                >
                  My Angel
                </h2>

                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "clamp(18px,2vw,26px)",
                    color: "#374151",
                    lineHeight: 1.7,
                  }}
                >
                  كل سنه ونتي طيبة يا روح قلبي واتمني يكون عجبك الفجئة وقدرت
                  اسعدك وخليت اليوم دا ليكي يوم مميز， دمتي لي سكينتي واماني
                  وملجئ الوحيد واتمني من الله ان يجعلني لكي الظل الذي تستظلين به
                  واكون سبب في سعادتك وعند حسن ظنك ديما يارب.
                </p>
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="absolute bottom-5 left-2 text-3xl"
              >
                ❤️
              </motion.div>
            </div>
          </motion.div>

          {/* ENVELOPE SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={open ? { opacity: 1, scale: 1, y: 0 } : {}}
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
              <path d="M0 60 L215 0 L430 60 Z" fill="#4aaad8" />
              <circle cx="215" cy="45" r="24" fill="#ffffff" opacity=".95" />
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

      {/* NEXT BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        onClick={() => setShowVideo(true)}
        className="
          absolute
          bottom-55 sm:bottom-10 lg:bottom-6
          left-1/2 -translate-x-1/2
          px-10 py-3
          rounded-full
          text-white font-bold tracking-widest
          bg-white/10 backdrop-blur-lg
          border border-white/30
          shadow-2xl
        "
      >
        Next
      </motion.button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Caveat:wght@500&display=swap');
      `}</style>
    </motion.div>
  );
}