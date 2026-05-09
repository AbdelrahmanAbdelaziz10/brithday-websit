import usePasscode from "../components/Passcode/usePasscode";
import PasscodeBox from "../components/Passcode/PasscodeBox";
import ImageCard from "../components/ImageCard";
import BirthdayOverlay from "../components/BirthdayOverlay";
import FloatingBubbles from "../components/FloatingBubbles";
import Keypad from "../components/Keypad";
import LoveQuestion from "../components/LoveQuestion";
import GiftPage from "../components/Gifs/GiftPage";

import { useState, useEffect } from "react";

import HitHeart from "../assets/images/hearthead2.mp4";
import Angrey from "../assets/images/HowDareYou.gif";

export default function MainPage() {
  const {
    passcode,
    isUnlocked,
    error,
    handleClick,
    handleSubmit,
    handleTryAgain,
  } = usePasscode();

  const [stage, setStage] = useState("lock");

  useEffect(() => {
    if (isUnlocked) {
      setStage("unlocked");
    }
  }, [isUnlocked]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[pink] via-[#e994a2] to-[#d4fc79] flex items-center justify-center relative overflow-hidden px-4">

      <FloatingBubbles />

      {/* Birthday Overlay */}
      <BirthdayOverlay
        isUnlocked={stage === "unlocked"}
        onNext={() => setStage("question")}
      />

      {/* Question Stage */}
      {stage === "question" && (
        <LoveQuestion
          title="Are you ready for surprise?"
          image={HitHeart}
          onYes={() => setStage("gift")}
          onNo={() => setStage("angrey")}
          stage={stage}
          setStage={setStage}
        />
      )}

      {/* Angry Stage */}
      {stage === "angrey" && (
        <LoveQuestion
          title="How Dare You Say No!"
          image={Angrey}
          onYes={() => setStage("gift")}
          onNo={() => setStage("angrey")}
          stage={stage}
          setStage={setStage}
        />
      )}

      {/* Gift Stage */}
      {stage === "gift" && <GiftPage />}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 z-10">

        {/* Left Image */}
        <ImageCard isUnlocked={stage === "unlocked"} />

        {/* Right Side */}
        <div className="text-center text-white max-w-md w-full">

          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Sara Enter Passcode ❤️
          </h2>

          <p className="text-lg mb-10 text-white/90">
            The passcode is the Special Date between us (DDMMYY).
          </p>

          {/* Passcode Box */}
          <PasscodeBox passcode={passcode} />

          {/* Keypad */}
          {!error && (
            <>
              <div className="mt-8">
                <Keypad onClick={handleClick} />
              </div>

              {/* Next Button */}
              {passcode.length === 6 && (
                <button
                  onClick={handleSubmit}
                  className="mt-8 px-10 py-3 rounded-2xl bg-white text-pink-500 font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition duration-300"
                >
                  Next 
                </button>
              )}
            </>
          )}

          {/* Error Card */}
          {error && (
            <div className="mt-10 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl animate-fadeIn">

              <div className="text-6xl mb-4">
                😢
              </div>

              <h2 className="text-4xl font-bold mb-2">
                غلط يا هانم
              </h2>

              <p className="text-white/80 mb-1">
                خدي هنت (يوم مميز لينا )
              </p>

              <button
                onClick={handleTryAgain}
                className="px-5 py-1 rounded-2xl cursor-pointer mt-4 bg-white text-pink-500 font-bold text-lg hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
              >
                Try Again
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}