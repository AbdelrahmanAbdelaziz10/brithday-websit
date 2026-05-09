import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoveLetterScreen({ onBack }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      key="letter-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
      style={{ background: "#4a8ec2" }}
    >
      {/* Sparkles */}
      {[
        { top: "7%", left: "8%", size: 16, delay: 0 },
        { top: "14%", right: "10%", size: 13, delay: 0.5 },
        { bottom: "22%", left: "5%", size: 14, delay: 1 },
        { bottom: "14%", right: "7%", size: 12, delay: 0.3 },
        { top: "42%", left: "3%", size: 10, delay: 0.8 },
        { top: "32%", right: "4%", size: 11, delay: 1.3 },
      ].map((s, i) => (
        <motion.span key={i}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: s.delay }}
          className="absolute pointer-events-none select-none text-white/60"
          style={{ ...s, fontSize: s.size }}>✦</motion.span>
      ))}

      {/* "love you" speech bubble */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.6 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 140 }}
        className="absolute"
        style={{ top: "7%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="relative bg-white rounded-2xl px-5 py-2 shadow-xl">
          <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: 24, color: "#e87da8" }}>
            love you
          </span>
          <div className="flex justify-center gap-1 mt-0.5">
            {["♥","♥","♥","♥"].map((h, i) => (
              <span key={i} className="text-pink-400 text-xs">{h}</span>
            ))}
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{ borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderTop: "11px solid white" }} />
        </div>
      </motion.div>

      {/* Scene: photo strip + envelope + letter */}
      <div className="flex items-end justify-center gap-3 md:gap-6 w-full max-w-xl"
        style={{ marginTop: 60 }}>

        {/* ── Photo Strip ── */}
        <motion.div
          initial={{ opacity: 0, x: -70, rotate: -12 }}
          animate={open ? { opacity: 1, x: 0, rotate: -7 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 90, damping: 14 }}
          className="flex flex-col gap-2 flex-shrink-0"
          style={{ marginBottom: 28 }}
        >
          {/* Photo 1 — couple silhouette */}
          <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
            <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
              <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fce4ec"/>
                    <stop offset="100%" stopColor="#f8bbd0"/>
                  </linearGradient>
                </defs>
                <rect width="72" height="64" fill="url(#g1)"/>
                <circle cx="29" cy="22" r="10" fill="#f48fb1"/>
                <circle cx="44" cy="20" r="11" fill="#e91e8c" opacity=".7"/>
                <path d="M10 64 Q29 44 48 64" fill="#f06292"/>
                <path d="M30 64 Q50 46 70 64" fill="#c2185b" opacity=".7"/>
                <circle cx="25" cy="19" r="2.5" fill="#fff" opacity=".5"/>
                <circle cx="33" cy="19" r="2.5" fill="#fff" opacity=".5"/>
              </svg>
            </div>
          </div>

          {/* Photo 2 — night sky / northern lights */}
          <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
            <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
              <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d1b2a"/>
                    <stop offset="100%" stopColor="#1a237e"/>
                  </linearGradient>
                </defs>
                <rect width="72" height="64" fill="url(#g2)"/>
                <ellipse cx="36" cy="28" rx="28" ry="14" fill="#00bcd4" opacity=".18"/>
                <path d="M5 30 Q20 18 36 25 Q52 32 67 20" stroke="#4dd0e1" strokeWidth="2.5" fill="none" opacity=".5"/>
                <path d="M5 38 Q22 24 38 32 Q54 40 67 28" stroke="#80deea" strokeWidth="1.5" fill="none" opacity=".35"/>
                {[4,14,24,34,44,54,64].map((x,i) => (
                  <circle key={i} cx={x} cy={6 + (i%3)*4} r={0.8 + (i%2)*0.6} fill="#fff" opacity={.5+i*.07}/>
                ))}
                <rect x="0" y="50" width="72" height="14" fill="#0d1b2a"/>
                <path d="M8 50 L16 40 L24 50" fill="#263238"/>
                <path d="M48 50 L58 38 L68 50" fill="#1a2f3a"/>
              </svg>
            </div>
          </div>

          {/* Photo 3 — two figures / silhouette */}
          <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
            <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
              <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff7043"/>
                    <stop offset="50%" stopColor="#f06292"/>
                    <stop offset="100%" stopColor="#7b1fa2"/>
                  </linearGradient>
                </defs>
                <rect width="72" height="64" fill="url(#g3)"/>
                <ellipse cx="36" cy="30" rx="30" ry="18" fill="#fff" opacity=".08"/>
                {/* two silhouettes */}
                <circle cx="28" cy="32" r="7" fill="#1a0a00" opacity=".7"/>
                <rect x="23" y="38" width="10" height="16" rx="5" fill="#1a0a00" opacity=".7"/>
                <circle cx="44" cy="30" r="8" fill="#1a0a00" opacity=".7"/>
                <rect x="38" y="36" width="12" height="18" rx="6" fill="#1a0a00" opacity=".7"/>
                <circle cx="36" cy="16" rx="8" ry="5" fill="#fff" opacity=".15"/>
              </svg>
            </div>
          </div>

          {/* LOVE label */}
          <div className="bg-white px-2 py-1 shadow-xl text-center" style={{ width: 72, borderRadius: 2 }}>
            <span style={{ color: "#e91e63", fontWeight: 800, fontSize: 13, fontFamily: "sans-serif" }}>LOVE</span>
            <span style={{ color: "#f48fb1", fontSize: 13 }}> ♥</span>
          </div>
        </motion.div>

        {/* ── Envelope + Letter ── */}
        <div className="relative flex-shrink-0" style={{ width: "clamp(190px,40vw,260px)" }}>

          {/* Letter rising out */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={open ? { y: -24, opacity: 1 } : {}}
            transition={{ delay: 0.85, type: "spring", stiffness: 70, damping: 11 }}
            className="relative z-20"
            style={{ width: "88%", marginLeft: "6%" }}
          >
            {/* Stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={open ? { opacity: 1, scale: 1, rotate: -8 } : {}}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -top-2 -right-2 bg-white shadow-lg z-30"
              style={{
                width: 36, height: 40,
                border: "2px dashed #ccc",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}
            >
              🦋
            </motion.div>

            {/* Paper */}
            <div className="relative shadow-2xl rounded-sm overflow-hidden"
              style={{ background: "linear-gradient(170deg,#f0f8ff 0%,#fff 100%)", minHeight: 170 }}>
              {/* ruled lines */}
              <div className="absolute inset-0 px-4 pt-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} style={{ borderBottom: "1px solid #dbeafe", marginBottom: 16, height: 1 }} />
                ))}
              </div>
              {/* text */}
              <div className="relative px-4 pt-5 pb-8" style={{ zIndex: 1 }}>
                <p style={{
                  fontFamily: "'Caveat', cursive, 'Dancing Script', cursive",
                  fontSize: "clamp(8px,1.6vw,12px)",
                  color: "#374151",
                  lineHeight: 1.85,
                }}>
                  the calm I never knew<br/>
                  I needed and the<br/>
                  warmth I always look<br/>
                  for — I just want you to<br/>
                  know that I'm really<br/>
                  happy with you, and I<br/>
                  want to keep choosing<br/>
                  you every single day. I<br/>
                  love you, more than I<br/>
                  ever say out loud
                </p>
              </div>
              {/* heart */}
              <motion.div
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="absolute bottom-3 right-4 text-xl"
              >
                ❤️
              </motion.div>
            </div>
          </motion.div>

          {/* Envelope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 30 }}
            animate={open ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative z-10"
          >
            <svg viewBox="0 0 260 175" className="w-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
              {/* body */}
              <rect x="0" y="35" width="260" height="140" rx="10" fill="#5bb8e8"/>
              {/* open flap */}
              <path d="M0 35 L130 5 L260 35 Z" fill="#4aaad8"/>
              {/* inner flap shadow */}
              <path d="M0 35 L130 5 L260 35 L130 85 Z" fill="#3d9bc9" opacity=".25"/>
              {/* left side fold */}
              <path d="M0 35 L0 175 L110 105 Z" fill="#3d9bc9" opacity=".4"/>
              {/* right side fold */}
              <path d="M260 35 L260 175 L150 105 Z" fill="#3d9bc9" opacity=".4"/>
              {/* bottom fold */}
              <path d="M0 175 L110 105 L150 105 L260 175 Z" fill="#4aaad8" opacity=".65"/>
              {/* heart on flap */}
              <text x="128" y="30" fontSize="16" textAnchor="middle" fill="#e87da8">❤</text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* BACK button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={onBack}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 px-9 py-2.5 rounded-full font-bold text-white tracking-widest border-2 border-white/50 bg-black/25 hover:bg-black/40 transition"
        style={{ fontSize: 15 }}
      >
        BACK
      </motion.button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Caveat:wght@500&display=swap');
      `}</style>
    </motion.div>
  );
}