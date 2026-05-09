import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GiftBox from "../assets/images/gift.png";

const surprises = {
  2: {
    emoji: "💌",
    title: "Love Letter",
    text: "You are the best thing that ever happened to me ✨",
    bg: "from-pink-100 to-rose-200",
  },
  3: {
    emoji: "💖",
    title: "Special Gift",
    text: "You are my favorite person in the whole world 💕",
    bg: "from-purple-100 to-pink-200",
  },
};

// ─── Birthday Cake Screen ───────────────────────────────────────────────────
function BirthdayCakeScreen({ onBack }) {
  const [step, setStep] = useState(0); // 0=idle,1=line1,2=line2,3=wish,4=cake,5=buttons
  const [blown, setBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const cfRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 1800),
      setTimeout(() => setStep(4), 2400),
      setTimeout(() => setStep(5), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  function blow() {
    if (blown) return;
    setBlown(true);
    let pieces = [];
    const colors = ["#f9a8d4","#a5f3fc","#fde68a","#86efac","#c4b5fd","#fb923c","#fff"];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        duration: Math.random() * 2 + 2,
        isCircle: Math.random() > 0.5,
      });
    }
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4500);
  }

  return (
    <motion.div
      key="cake-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#5b9bd5] overflow-hidden px-4"
    >
      {/* Stars */}
      {["6% / 9%","12% / right 11%","28% / 4%","bottom 18% / right 6%","bottom 28% / 6%"].map((pos, i) => (
        <span key={i} className="absolute text-white/55 text-base pointer-events-none animate-pulse select-none"
          style={{ top: pos.split(" / ")[0], left: pos.split(" / ")[1] }}>✦</span>
      ))}

      {/* Confetti */}
      {confetti.map(p => (
        <span key={p.id} className="fixed pointer-events-none"
          style={{
            left: `${p.left}vw`, top: "-12px",
            width: p.size, height: p.size,
            background: p.color,
            borderRadius: p.isCircle ? "50%" : "3px",
            animation: `fall ${p.duration}s linear forwards`,
          }}
        />
      ))}

      {/* "happy birthday my love" */}
      <div className="flex flex-col items-center mb-5" style={{ minHeight: 90 }}>
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="block font-[Dancing Script] text-white text-center drop-shadow-md"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(28px,5vw,50px)" }}
        >
          Happy Birthday
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="block text-white text-center drop-shadow-md my-6 "
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(28px,5vw,50px)" }}
        >
          My Angel 💕
        </motion.span>
      </div>

      {/* Make a wish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={step >= 3 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="text-white text-center drop-shadow-md mb-5"
        style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(20px,4vw,38px)" }}
      >
        {blown ? "🎉 Happy Birthday! 🎉" : "Make a Wish ✨"}
      </motion.div>

      {/* 3D Cake */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.75 }}
        animate={step >= 4 ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ perspective: 700 }}
      >
        <div style={{
          animation: "cake-sway 5s ease-in-out infinite",
          transformStyle: "preserve-3d",
        }}>
          <svg
            viewBox="0 0 240 210"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "clamp(200px,38vw,260px)",
              filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.28))",
            }}
          >
            {/* Shadow */}
            <ellipse cx="120" cy="207" rx="80" ry="8" fill="rgba(0,0,0,.14)" />
            {/* Bottom tier */}
            <rect x="20" y="140" width="200" height="60" rx="12" fill="#b2ede8" />
            <rect x="20" y="140" width="200" height="20" rx="12" fill="#d4f5f2" />
            <ellipse cx="48" cy="158" rx="13" ry="10" fill="#fff" opacity=".65" />
            <ellipse cx="76" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
            <ellipse cx="104" cy="158" rx="12" ry="10" fill="#fff" opacity=".65" />
            <ellipse cx="132" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
            <ellipse cx="160" cy="158" rx="12" ry="10" fill="#fff" opacity=".65" />
            <ellipse cx="188" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
            <circle cx="50" cy="172" r="4.5" fill="#f9a8d4" opacity=".85" />
            <circle cx="73" cy="169" r="3.5" fill="#a5f3fc" opacity=".85" />
            <circle cx="96" cy="173" r="4.5" fill="#fde68a" opacity=".85" />
            <circle cx="120" cy="170" r="3.5" fill="#f9a8d4" opacity=".85" />
            <circle cx="144" cy="173" r="4.5" fill="#a5f3fc" opacity=".85" />
            <circle cx="167" cy="169" r="3.5" fill="#fde68a" opacity=".85" />
            <circle cx="190" cy="172" r="4.5" fill="#f9a8d4" opacity=".85" />
            {/* Top tier */}
            <rect x="45" y="92" width="150" height="52" rx="10" fill="#b2ede8" />
            <rect x="45" y="92" width="150" height="18" rx="10" fill="#d4f5f2" />
            <ellipse cx="68" cy="109" rx="11" ry="9" fill="#fff" opacity=".65" />
            <ellipse cx="96" cy="112" rx="10" ry="8" fill="#fff" opacity=".65" />
            <ellipse cx="120" cy="109" rx="11" ry="9" fill="#fff" opacity=".65" />
            <ellipse cx="148" cy="112" rx="10" ry="8" fill="#fff" opacity=".65" />
            <ellipse cx="172" cy="109" rx="9" ry="8" fill="#fff" opacity=".65" />
            <circle cx="70" cy="122" r="4" fill="#f9a8d4" opacity=".85" />
            <circle cx="93" cy="125" r="3.5" fill="#fde68a" opacity=".85" />
            <circle cx="118" cy="122" r="4" fill="#a5f3fc" opacity=".85" />
            <circle cx="143" cy="125" r="3.5" fill="#f9a8d4" opacity=".85" />
            <circle cx="167" cy="122" r="4" fill="#fde68a" opacity=".85" />
            {/* 7 Candles */}
            {[
              { x: 60, fill: "#f4a9c0", cx: 64.5, delay: "0s" },
              { x: 76, fill: "#a8d5f4", cx: 80.5, delay: ".15s" },
              { x: 93, fill: "#f4a9c0", cx: 97.5, delay: ".3s" },
              { x: 111, fill: "#a8d5f4", cx: 115.5, delay: ".45s" },
              { x: 129, fill: "#f4a9c0", cx: 133.5, delay: ".6s" },
              { x: 147, fill: "#a8d5f4", cx: 151.5, delay: ".75s" },
              { x: 163, fill: "#f4a9c0", cx: 167.5, delay: ".9s" },
            ].map((c, i) => (
              <g key={i}>
                <rect x={c.x} y="62" width="9" height="32" rx="4" fill={c.fill} />
                <g
                  style={{
                    transformOrigin: `${c.cx}px 94px`,
                    animation: blown ? "none" : `flicker 0.45s ${c.delay} infinite alternate`,
                    opacity: blown ? 0 : 1,
                    transition: `opacity 0.3s ${i * 0.09}s`,
                  }}
                >
                  <ellipse cx={c.cx} cy="57" rx="5.5" ry="7.5" fill="#ff9f1c" />
                  <ellipse cx={c.cx} cy="56" rx="3" ry="5" fill="#ffed4a" />
                </g>
              </g>
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Buttons */}
      <AnimatePresence>
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={blow}
              disabled={blown}
              className="px-12 py-3 rounded-full text-white font-bold text-xl tracking-widest border-2 border-white/60 bg-white/25 hover:bg-white/40 transition disabled:opacity-50"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              BLOW 🌬️
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="text-white/75 hover:text-white text-sm font-bold tracking-wider transition mt-1"
            >
              ← Back to Gifts
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Keyframes injected */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        @keyframes cake-sway {
          0%,100% { transform: rotateY(-9deg) rotateX(6deg); }
          50%      { transform: rotateY(9deg)  rotateX(6deg); }
        }
        @keyframes flicker {
          0%   { transform: scaleY(1)    scaleX(1);    opacity: 1;    }
          50%  { transform: scaleY(.82)  scaleX(1.15); opacity: .88;  }
          100% { transform: scaleY(1.12) scaleX(.9);   opacity: 1;    }
        }
        @keyframes fall {
          0%   { transform: translateY(0)     rotate(0deg);   opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}

// ─── Main GiftPage ──────────────────────────────────────────────────────────
export default function GiftPage() {
  const [openedGift, setOpenedGift] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-[#fdfdfd] flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background Glow */}
      <div className="absolute top-[-150px] w-[500px] h-[500px] bg-[#6fa8dc]/10 rounded-full blur-3xl" />

      <AnimatePresence mode="wait">

        {/* ── Cake Screen ── */}
        {openedGift === 1 && (
          <BirthdayCakeScreen key="cake" onBack={() => setOpenedGift(null)} />
        )}

        {/* ── Card Screen (gifts 2 & 3) ── */}
        {openedGift && openedGift !== 1 && (
          <motion.div
            key={openedGift}
            initial={{ scale: 0.2, opacity: 0, rotate: -15 }}
            animate={{ scale: [0.2, 1.1, 1], opacity: 1, rotate: [0, -4, 4, 0] }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`bg-gradient-to-br ${surprises[openedGift].bg} rounded-[40px] shadow-2xl px-10 py-14 flex flex-col items-center max-w-[500px] w-full border border-white/50 backdrop-blur-xl`}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -6, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-7xl mb-6"
            >
              {surprises[openedGift].emoji}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-[#2f5ea8] mb-5 text-center"
            >
              {surprises[openedGift].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-[#4b5563] text-center leading-9 font-medium"
            >
              {surprises[openedGift].text}
            </motion.p>
            <div className="flex gap-4 mt-10 flex-wrap justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenedGift(null)}
                className="bg-[#6fa8dc] hover:bg-[#5d97ce] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition"
              >
                Back to Gifts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenedGift(openedGift)}
                className="bg-white/80 hover:bg-white text-[#2f5ea8] px-8 py-3 rounded-full text-lg font-bold shadow-lg transition"
              >
                Open Again ✨
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── Gifts Screen ── */}
        {!openedGift && (
          <motion.div key="gifts" className="flex flex-col items-center">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[38px] md:text-[58px] font-extrabold text-[#2f5ea8] tracking-wide mb-16 drop-shadow-sm"
            >
              Gift for you 🎁
            </motion.h1>

            <div className="flex items-center justify-center gap-4 md:gap-10">
              {[1, 2, 3].map((gift, index) => (
                <motion.div
                  key={gift}
                  initial={{ y: 60, opacity: 0, scale: 0.7 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -12, scale: 1.08, rotate: index % 2 === 0 ? -4 : 4 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpenedGift(gift)}
                  className="cursor-pointer"
                >
                  <motion.img
                    src={GiftBox}
                    alt="gift"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    className="w-28 md:w-44 drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] select-none"
                  />
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 text-[20px] md:text-[28px] font-semibold text-[#2f5ea8] tracking-wide"
            >
              click any gift to open ✨
            </motion.p>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}