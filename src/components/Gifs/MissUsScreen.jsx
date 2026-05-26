import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BackImage from "../../assets/images/kiss.png";
import ImageOne from "../../assets/images/قراية فتحتنا 1.jpeg";
import ImageTwo from "../../assets/images/الدهب 1.jpeg";
import ImageThree from "../../assets/images/شبكتنا 1.jpeg";



export default function MissUsScreen({ onBack }) {
  const [currentWord, setCurrentWord] = useState(0);
const isMobile = window.innerWidth < 868;
  const words = ["I", "Love", "You", "My Heart"];

  const photos = [
    {
      img: ImageOne,
      title: "♥ قراية فتحتنا ",
      date: "23.05.2025",
      rotate: "-8deg",
    },
    {
      img: ImageTwo,
      title: "♥ نشتري ذهبها",
      date: "04.06.2025",
      rotate: "0deg",
    },
    {
      img: ImageThree,
      title: "♥ شبكتها بدبلتي",
      date: "30.10.2025",
      rotate: "7deg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
     style={{
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: isMobile ? "flex-start" : "center",
  padding: isMobile ? "80px 16px" : "120px",
  boxSizing: "border-box",
  fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",

  // ✅ التعديل هنا
  height: isMobile ? "auto" : "100vh",
  minHeight: "100vh",

  overflowY: "visible", // بدل auto
  overflowX: "hidden",
}}
    >
      {/* ── Background: beige + red lipstick kiss marks ── */}
      <div
  style={{
    position: "absolute",
    inset: 0,
    height: "100%",   // مهم
    width: "100%",    // مهم
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

  

      {/* Slight warm overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(200,140,100,0.08)" }} />

      {/* ── I MISS US title ── */}
      {/* ── Animated bottom word ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-1.5rem",
          marginBottom: "2.5rem",

        }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentWord}
            initial={{ opacity: 0, scale: 0.5, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.45 }}
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#fff",
              textShadow: "3px 3px 0 rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.25)",
              // textTransform: "uppercase",
            }}
          >
            {words[currentWord]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 0 36px",
          fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
          fontWeight: 900,
          letterSpacing: "0.12em",
          color: "#fff",
          textShadow: "3px 3px 0 rgba(0,0,0,0.55), 0 0 30px rgba(0,0,0,0.3)",
          textTransform: "uppercase",
        }}
      >
        I MISS US
      </motion.h1> */}

      {/* ── Polaroid cards ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(30px, 3vw, 100px)",
          flexWrap: "wrap",
          marginBottom: "2.5rem",
        }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotate: photo.rotate }}
            animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
            transition={{  type: "spring", stiffness: 20 }}
            whileHover={{ scale: 1.06, y: -10, zIndex: 10 }}
            style={{
              background: "#f5ede0",
              padding: "10px 10px 0",
              boxShadow: "4px 8px 28px rgba(0,0,0,0.45)",
              width: "clamp(290px, 30vw, 290px)",
              cursor: "pointer",
              transformOrigin: "center bottom",
            }}
          >
            {/* Photo */}
            <img
              src={photo.img}
              alt=""
              style={{
                width: "100%",
                height: "clamp(250px, 30vw, 250px)",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Caption area — inside the white border like real Polaroid */}
            <div
              style={{
                textAlign: "center",
                background: "#f5ede0",
              }}
            >
              <p
                style={{
                  margin: "0 0 1px",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(11px, 1.4vw, 14px)",
                  color: "#1a1a1a",
                  fontWeight: 600,
                }}
              >
                {photo.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "clamp(10px, 1.2vw, 12px)",
                  color: "#555",
                  letterSpacing: "0.02em",
                }}
              >
                {photo.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>



      {/* ── Buttons ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          gap: "16px",
          marginTop: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        

        {onBack && (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            style={{
              padding: "12px 36px",
            borderRadius: "50px",
            background: "#111",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            border: "1.5px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
            boxShadow: "2px 4px 14px rgba(0,0,0,0.4)",
            }}
          >
            Next
          </motion.button>
        )}
      </div>
    </div>
  );
}