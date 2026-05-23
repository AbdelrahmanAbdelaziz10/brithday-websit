import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GiftBox from "../../assets/images/gift.png";
import {surprises} from "./data";
import BirthdayCakeScreen from "./BirthdayCakeScreen";
import LoveLetterScreen from "./LoveLetterScreen";
import MissUsScreen from "./MissUsScreen";
// ─── Surprise data for gift 2 ───────────────────────────────────────────────
// const surprises = {
//   2: {
//     emoji: "💌",
//     title: "Love Letter",
//     text: "You are the best thing that ever happened to me ✨",
//     bg: "from-pink-100 to-rose-200",
//   },
// };

// ─── Birthday Cake Screen (Gift 1) ──────────────────────────────────────────
// function BirthdayCakeScreen({ onBack }) {
//   const [step, setStep] = useState(0);
//   const [blown, setBlown] = useState(false);
//   const [confetti, setConfetti] = useState([]);

//   useEffect(() => {
//     const timers = [
//       setTimeout(() => setStep(1), 300),
//       setTimeout(() => setStep(2), 900),
//       setTimeout(() => setStep(3), 1800),
//       setTimeout(() => setStep(4), 2400),
//       setTimeout(() => setStep(5), 3300),
//     ];
//     return () => timers.forEach(clearTimeout);
//   }, []);

//   function blow() {
//     if (blown) return;
//     setBlown(true);
//     const colors = ["#f9a8d4","#a5f3fc","#fde68a","#86efac","#c4b5fd","#fb923c","#fff"];
//     const pieces = Array.from({ length: 80 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       size: Math.random() * 8 + 6,
//       duration: Math.random() * 2 + 2,
//       isCircle: Math.random() > 0.5,
//     }));
//     setConfetti(pieces);
//     setTimeout(() => setConfetti([]), 4500);
//   }

//   return (
//     <motion.div
//       key="cake-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4"
//       style={{ background: "#5b9bd5" }}
//     >
//       {["6% / 9%","12% / right 11%","28% / 4%","bottom 18% / right 6%","bottom 28% / 6%"].map((pos, i) => (
//         <span key={i} className="absolute text-white/55 text-base pointer-events-none animate-pulse select-none"
//           style={{ top: pos.split(" / ")[0], left: pos.split(" / ")[1] }}>✦</span>
//       ))}

//       {confetti.map(p => (
//         <span key={p.id} className="fixed pointer-events-none"
//           style={{
//             left: `${p.left}vw`, top: "-12px",
//             width: p.size, height: p.size,
//             background: p.color,
//             borderRadius: p.isCircle ? "50%" : "3px",
//             animation: `fall ${p.duration}s linear forwards`,
//           }} />
//       ))}

//       <div className="flex flex-col items-center mb-5" style={{ minHeight: 90 }}>
//         <motion.span
//           initial={{ opacity: 0, y: 18 }}
//           animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="block text-white text-center drop-shadow-md"
//           style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(38px,7vw,68px)" }}
//         >
//           Happy Birthday
//         </motion.span>
//         <motion.span
//           initial={{ opacity: 0, y: 18 }}
//           animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="block text-white text-center drop-shadow-md my-2"
//           style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(38px,7vw,68px)" }}
//         >
//           My Angel 💕
//         </motion.span>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.85 }}
//         animate={step >= 3 ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.7 }}
//         className="text-white text-center drop-shadow-md mb-5"
//         style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(30px,5.5vw,52px)" }}
//       >
//         {blown ? "🎉 Happy Birthday! 🎉" : "Make a Wish ✨"}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50, scale: 0.75 }}
//         animate={step >= 4 ? { opacity: 1, y: 0, scale: 1 } : {}}
//         transition={{ type: "spring", stiffness: 120, damping: 14 }}
//         style={{ perspective: 700 }}
//       >
//         <div style={{ animation: "cake-sway 5s ease-in-out infinite", transformStyle: "preserve-3d" }}>
//           <svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg"
//             style={{ width: "clamp(200px,38vw,260px)", filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.28))" }}>
//             <ellipse cx="120" cy="207" rx="80" ry="8" fill="rgba(0,0,0,.14)" />
//             <rect x="20" y="140" width="200" height="60" rx="12" fill="#b2ede8" />
//             <rect x="20" y="140" width="200" height="20" rx="12" fill="#d4f5f2" />
//             <ellipse cx="48" cy="158" rx="13" ry="10" fill="#fff" opacity=".65" />
//             <ellipse cx="76" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
//             <ellipse cx="104" cy="158" rx="12" ry="10" fill="#fff" opacity=".65" />
//             <ellipse cx="132" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
//             <ellipse cx="160" cy="158" rx="12" ry="10" fill="#fff" opacity=".65" />
//             <ellipse cx="188" cy="161" rx="11" ry="9" fill="#fff" opacity=".65" />
//             <circle cx="50" cy="172" r="4.5" fill="#f9a8d4" opacity=".85" />
//             <circle cx="73" cy="169" r="3.5" fill="#a5f3fc" opacity=".85" />
//             <circle cx="96" cy="173" r="4.5" fill="#fde68a" opacity=".85" />
//             <circle cx="120" cy="170" r="3.5" fill="#f9a8d4" opacity=".85" />
//             <circle cx="144" cy="173" r="4.5" fill="#a5f3fc" opacity=".85" />
//             <circle cx="167" cy="169" r="3.5" fill="#fde68a" opacity=".85" />
//             <circle cx="190" cy="172" r="4.5" fill="#f9a8d4" opacity=".85" />
//             <rect x="45" y="92" width="150" height="52" rx="10" fill="#b2ede8" />
//             <rect x="45" y="92" width="150" height="18" rx="10" fill="#d4f5f2" />
//             <ellipse cx="68" cy="109" rx="11" ry="9" fill="#fff" opacity=".65" />
//             <ellipse cx="96" cy="112" rx="10" ry="8" fill="#fff" opacity=".65" />
//             <ellipse cx="120" cy="109" rx="11" ry="9" fill="#fff" opacity=".65" />
//             <ellipse cx="148" cy="112" rx="10" ry="8" fill="#fff" opacity=".65" />
//             <ellipse cx="172" cy="109" rx="9" ry="8" fill="#fff" opacity=".65" />
//             <circle cx="70" cy="122" r="4" fill="#f9a8d4" opacity=".85" />
//             <circle cx="93" cy="125" r="3.5" fill="#fde68a" opacity=".85" />
//             <circle cx="118" cy="122" r="4" fill="#a5f3fc" opacity=".85" />
//             <circle cx="143" cy="125" r="3.5" fill="#f9a8d4" opacity=".85" />
//             <circle cx="167" cy="122" r="4" fill="#fde68a" opacity=".85" />
//             {[
//               { x: 60, fill: "#f4a9c0", cx: 64.5, delay: "0s" },
//               { x: 76, fill: "#a8d5f4", cx: 80.5, delay: ".15s" },
//               { x: 93, fill: "#f4a9c0", cx: 97.5, delay: ".3s" },
//               { x: 111, fill: "#a8d5f4", cx: 115.5, delay: ".45s" },
//               { x: 129, fill: "#f4a9c0", cx: 133.5, delay: ".6s" },
//               { x: 147, fill: "#a8d5f4", cx: 151.5, delay: ".75s" },
//               { x: 163, fill: "#f4a9c0", cx: 167.5, delay: ".9s" },
//             ].map((c, i) => (
//               <g key={i}>
//                 <rect x={c.x} y="62" width="9" height="32" rx="4" fill={c.fill} />
//                 <g style={{
//                   transformOrigin: `${c.cx}px 94px`,
//                   animation: blown ? "none" : `flicker 0.45s ${c.delay} infinite alternate`,
//                   opacity: blown ? 0 : 1,
//                   transition: `opacity 0.3s ${i * 0.09}s`,
//                 }}>
//                   <ellipse cx={c.cx} cy="57" rx="5.5" ry="7.5" fill="#ff9f1c" />
//                   <ellipse cx={c.cx} cy="56" rx="3" ry="5" fill="#ffed4a" />
//                 </g>
//               </g>
//             ))}
//           </svg>
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {step >= 5 && (
//           <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center gap-3 mt-6">
//             <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
//               onClick={blow} disabled={blown}
//               className="px-12 py-3 rounded-full text-white font-bold text-xl tracking-widest border-2 border-white/60 bg-white/25 hover:bg-white/40 transition disabled:opacity-50"
//               style={{ fontFamily: "'Great Vibes', cursive" }}>
//               BLOW 🌬️
//             </motion.button>
//             <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}
//               onClick={onBack}
//               className="text-white/75 hover:text-white text-sm font-bold tracking-wider transition mt-1">
//               ← Back to Gifts
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
//         @keyframes cake-sway {
//           0%,100% { transform: rotateY(-9deg) rotateX(6deg); }
//           50%      { transform: rotateY(9deg)  rotateX(6deg); }
//         }
//         @keyframes flicker {
//           0%   { transform: scaleY(1)    scaleX(1);    opacity: 1; }
//           50%  { transform: scaleY(.82)  scaleX(1.15); opacity: .88; }
//           100% { transform: scaleY(1.12) scaleX(.9);   opacity: 1; }
//         }
//         @keyframes fall {
//           0%   { transform: translateY(0)     rotate(0deg);   opacity: 1; }
//           100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
//         }
//       `}</style>
//     </motion.div>
//   );
// }

// ─── Love Letter Screen (Gift 3) ────────────────────────────────────────────
// function LoveLetterScreen({ onBack }) {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setOpen(true), 500);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <motion.div
//       key="letter-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
//       style={{ background: "#4a8ec2" }}
//     >
//       {/* Sparkles */}
//       {[
//         { top: "7%", left: "8%", size: 16, delay: 0 },
//         { top: "14%", right: "10%", size: 13, delay: 0.5 },
//         { bottom: "22%", left: "5%", size: 14, delay: 1 },
//         { bottom: "14%", right: "7%", size: 12, delay: 0.3 },
//         { top: "42%", left: "3%", size: 10, delay: 0.8 },
//         { top: "32%", right: "4%", size: 11, delay: 1.3 },
//       ].map((s, i) => (
//         <motion.span key={i}
//           animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
//           transition={{ repeat: Infinity, duration: 2.2, delay: s.delay }}
//           className="absolute pointer-events-none select-none text-white/60"
//           style={{ ...s, fontSize: s.size }}>✦</motion.span>
//       ))}

//       {/* "love you" speech bubble */}
//       <motion.div
//         initial={{ opacity: 0, y: -20, scale: 0.6 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 0.3, type: "spring", stiffness: 140 }}
//         className="absolute"
//         style={{ top: "7%", left: "50%", transform: "translateX(-50%)" }}
//       >
//         <div className="relative bg-white rounded-2xl px-5 py-2 shadow-xl">
//           <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: 24, color: "#e87da8" }}>
//             love you
//           </span>
//           <div className="flex justify-center gap-1 mt-0.5">
//             {["♥","♥","♥","♥"].map((h, i) => (
//               <span key={i} className="text-pink-400 text-xs">{h}</span>
//             ))}
//           </div>
//           <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0"
//             style={{ borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderTop: "11px solid white" }} />
//         </div>
//       </motion.div>

//       {/* Scene: photo strip + envelope + letter */}
//       <div className="flex items-end justify-center gap-3 md:gap-6 w-full max-w-xl"
//         style={{ marginTop: 60 }}>

//         {/* ── Photo Strip ── */}
//         <motion.div
//           initial={{ opacity: 0, x: -70, rotate: -12 }}
//           animate={open ? { opacity: 1, x: 0, rotate: -7 } : {}}
//           transition={{ delay: 0.5, type: "spring", stiffness: 90, damping: 14 }}
//           className="flex flex-col gap-2 flex-shrink-0"
//           style={{ marginBottom: 28 }}
//         >
//           {/* Photo 1 — couple silhouette */}
//           <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
//             <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
//               <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#fce4ec"/>
//                     <stop offset="100%" stopColor="#f8bbd0"/>
//                   </linearGradient>
//                 </defs>
//                 <rect width="72" height="64" fill="url(#g1)"/>
//                 <circle cx="29" cy="22" r="10" fill="#f48fb1"/>
//                 <circle cx="44" cy="20" r="11" fill="#e91e8c" opacity=".7"/>
//                 <path d="M10 64 Q29 44 48 64" fill="#f06292"/>
//                 <path d="M30 64 Q50 46 70 64" fill="#c2185b" opacity=".7"/>
//                 <circle cx="25" cy="19" r="2.5" fill="#fff" opacity=".5"/>
//                 <circle cx="33" cy="19" r="2.5" fill="#fff" opacity=".5"/>
//               </svg>
//             </div>
//           </div>

//           {/* Photo 2 — night sky / northern lights */}
//           <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
//             <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
//               <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#0d1b2a"/>
//                     <stop offset="100%" stopColor="#1a237e"/>
//                   </linearGradient>
//                 </defs>
//                 <rect width="72" height="64" fill="url(#g2)"/>
//                 <ellipse cx="36" cy="28" rx="28" ry="14" fill="#00bcd4" opacity=".18"/>
//                 <path d="M5 30 Q20 18 36 25 Q52 32 67 20" stroke="#4dd0e1" strokeWidth="2.5" fill="none" opacity=".5"/>
//                 <path d="M5 38 Q22 24 38 32 Q54 40 67 28" stroke="#80deea" strokeWidth="1.5" fill="none" opacity=".35"/>
//                 {[4,14,24,34,44,54,64].map((x,i) => (
//                   <circle key={i} cx={x} cy={6 + (i%3)*4} r={0.8 + (i%2)*0.6} fill="#fff" opacity={.5+i*.07}/>
//                 ))}
//                 <rect x="0" y="50" width="72" height="14" fill="#0d1b2a"/>
//                 <path d="M8 50 L16 40 L24 50" fill="#263238"/>
//                 <path d="M48 50 L58 38 L68 50" fill="#1a2f3a"/>
//               </svg>
//             </div>
//           </div>

//           {/* Photo 3 — two figures / silhouette */}
//           <div className="bg-white p-1.5 shadow-2xl" style={{ width: 72, borderRadius: 2 }}>
//             <div style={{ width: "100%", height: 64, borderRadius: 1, overflow: "hidden" }}>
//               <svg viewBox="0 0 72 64" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#ff7043"/>
//                     <stop offset="50%" stopColor="#f06292"/>
//                     <stop offset="100%" stopColor="#7b1fa2"/>
//                   </linearGradient>
//                 </defs>
//                 <rect width="72" height="64" fill="url(#g3)"/>
//                 <ellipse cx="36" cy="30" rx="30" ry="18" fill="#fff" opacity=".08"/>
//                 {/* two silhouettes */}
//                 <circle cx="28" cy="32" r="7" fill="#1a0a00" opacity=".7"/>
//                 <rect x="23" y="38" width="10" height="16" rx="5" fill="#1a0a00" opacity=".7"/>
//                 <circle cx="44" cy="30" r="8" fill="#1a0a00" opacity=".7"/>
//                 <rect x="38" y="36" width="12" height="18" rx="6" fill="#1a0a00" opacity=".7"/>
//                 <circle cx="36" cy="16" rx="8" ry="5" fill="#fff" opacity=".15"/>
//               </svg>
//             </div>
//           </div>

//           {/* LOVE label */}
//           <div className="bg-white px-2 py-1 shadow-xl text-center" style={{ width: 72, borderRadius: 2 }}>
//             <span style={{ color: "#e91e63", fontWeight: 800, fontSize: 13, fontFamily: "sans-serif" }}>LOVE</span>
//             <span style={{ color: "#f48fb1", fontSize: 13 }}> ♥</span>
//           </div>
//         </motion.div>

//         {/* ── Envelope + Letter ── */}
//         <div className="relative flex-shrink-0" style={{ width: "clamp(190px,40vw,260px)" }}>

//           {/* Letter rising out */}
//           <motion.div
//             initial={{ y: 80, opacity: 0 }}
//             animate={open ? { y: -24, opacity: 1 } : {}}
//             transition={{ delay: 0.85, type: "spring", stiffness: 70, damping: 11 }}
//             className="relative z-20"
//             style={{ width: "88%", marginLeft: "6%" }}
//           >
//             {/* Stamp */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0, rotate: -20 }}
//               animate={open ? { opacity: 1, scale: 1, rotate: -8 } : {}}
//               transition={{ delay: 1.5, type: "spring" }}
//               className="absolute -top-2 -right-2 bg-white shadow-lg z-30"
//               style={{
//                 width: 36, height: 40,
//                 border: "2px dashed #ccc",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 20,
//               }}
//             >
//               🦋
//             </motion.div>

//             {/* Paper */}
//             <div className="relative shadow-2xl rounded-sm overflow-hidden"
//               style={{ background: "linear-gradient(170deg,#f0f8ff 0%,#fff 100%)", minHeight: 170 }}>
//               {/* ruled lines */}
//               <div className="absolute inset-0 px-4 pt-4">
//                 {Array.from({ length: 9 }).map((_, i) => (
//                   <div key={i} style={{ borderBottom: "1px solid #dbeafe", marginBottom: 16, height: 1 }} />
//                 ))}
//               </div>
//               {/* text */}
//               <div className="relative px-4 pt-5 pb-8" style={{ zIndex: 1 }}>
//                 <p style={{
//                   fontFamily: "'Caveat', cursive, 'Dancing Script', cursive",
//                   fontSize: "clamp(8px,1.6vw,12px)",
//                   color: "#374151",
//                   lineHeight: 1.85,
//                 }}>
//                   the calm I never knew<br/>
//                   I needed and the<br/>
//                   warmth I always look<br/>
//                   for — I just want you to<br/>
//                   know that I'm really<br/>
//                   happy with you, and I<br/>
//                   want to keep choosing<br/>
//                   you every single day. I<br/>
//                   love you, more than I<br/>
//                   ever say out loud
//                 </p>
//               </div>
//               {/* heart */}
//               <motion.div
//                 animate={{ scale: [1, 1.18, 1] }}
//                 transition={{ repeat: Infinity, duration: 1.6 }}
//                 className="absolute bottom-3 right-4 text-xl"
//               >
//                 ❤️
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Envelope */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.75, y: 30 }}
//             animate={open ? { opacity: 1, scale: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
//             className="relative z-10"
//           >
//             <svg viewBox="0 0 260 175" className="w-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
//               {/* body */}
//               <rect x="0" y="35" width="260" height="140" rx="10" fill="#5bb8e8"/>
//               {/* open flap */}
//               <path d="M0 35 L130 5 L260 35 Z" fill="#4aaad8"/>
//               {/* inner flap shadow */}
//               <path d="M0 35 L130 5 L260 35 L130 85 Z" fill="#3d9bc9" opacity=".25"/>
//               {/* left side fold */}
//               <path d="M0 35 L0 175 L110 105 Z" fill="#3d9bc9" opacity=".4"/>
//               {/* right side fold */}
//               <path d="M260 35 L260 175 L150 105 Z" fill="#3d9bc9" opacity=".4"/>
//               {/* bottom fold */}
//               <path d="M0 175 L110 105 L150 105 L260 175 Z" fill="#4aaad8" opacity=".65"/>
//               {/* heart on flap */}
//               <text x="128" y="30" fontSize="16" textAnchor="middle" fill="#e87da8">❤</text>
//             </svg>
//           </motion.div>
//         </div>
//       </div>

//       {/* BACK button */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.6 }}
//         whileHover={{ scale: 1.06 }}
//         whileTap={{ scale: 0.94 }}
//         onClick={onBack}
//         className="absolute bottom-7 left-1/2 -translate-x-1/2 px-9 py-2.5 rounded-full font-bold text-white tracking-widest border-2 border-white/50 bg-black/25 hover:bg-black/40 transition"
//         style={{ fontSize: 15 }}
//       >
//         BACK
//       </motion.button>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Caveat:wght@500&display=swap');
//       `}</style>
//     </motion.div>
//   );
// }

// ─── Main GiftPage ───────────────────────────────────────────────────────────
export default function GiftPage() {
  const [openedGift, setOpenedGift] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-[#fdfdfd] flex flex-col items-center justify-start md:justify-center overflow-hidden pt-10 md:pt-0"
    >
      <div className="absolute top-[-150px] w-[500px] h-[500px] bg-[#6fa8dc]/10 rounded-full blur-3xl" />

      <AnimatePresence mode="wait">

        {/* Gift 1 → Cake */}
        {openedGift === 1 && (
          <BirthdayCakeScreen key="cake" onBack={() => setOpenedGift(null)} />
        )}

{/* Gift 2 → Miss Us */}
{openedGift === 2 && (
  <MissUsScreen
    key="missus"
    onBack={() => setOpenedGift(null)}
  />
)}

        {/* Gift 3 → Love Letter */}
        {openedGift === 3 && (
          <LoveLetterScreen key="letter" onBack={() => setOpenedGift(null)} />
        )}

        {/* Gift 2 → Card */}
        {/* {openedGift === 2 && (
          <motion.div
            key="card-2"
            initial={{ scale: 0.2, opacity: 0, rotate: -15 }}
            animate={{ scale: [0.2, 1.1, 1], opacity: 1, rotate: [0, -4, 4, 0] }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`bg-gradient-to-br ${surprises[2].bg} rounded-[40px] shadow-2xl px-10 py-14 flex flex-col items-center max-w-[500px] w-full border border-white/50 backdrop-blur-xl`}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -6, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-7xl mb-6"
            >
              {surprises[2].emoji}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-[#2f5ea8] mb-5 text-center"
            >
              {surprises[2].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-[#4b5563] text-center leading-9 font-medium"
            >
              {surprises[2].text}
            </motion.p>
            <div className="flex gap-4 mt-10 flex-wrap justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                onClick={() => setOpenedGift(null)}
                className="bg-[#6fa8dc] hover:bg-[#5d97ce] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition"
              >
                Back to Gifts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                onClick={() => setOpenedGift(2)}
                className="bg-white/80 hover:bg-white text-[#2f5ea8] px-8 py-3 rounded-full text-lg font-bold shadow-lg transition"
              >
                Open Again ✨
              </motion.button>
            </div>
          </motion.div>
        )} */}

        {/* Home screen */}
        {!openedGift && (
          <motion.div key="gifts" className="flex flex-col items-center">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[38px] md:text-[58px] font-extrabold text-[#0b7598] tracking-wide mb-10 md:mb-16 drop-shadow-sm"
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