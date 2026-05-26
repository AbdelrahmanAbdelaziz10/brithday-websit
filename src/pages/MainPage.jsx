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
     <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 z-10 px-4 md:px-0 py-6 md:py-0">

  {/* Left Image */}
  <div className="mb-8 md:mb-0">
    <ImageCard isUnlocked={stage === "unlocked"} />
  </div>

  {/* Right Side */}
  <div className="text-center text-white max-w-md w-full pt-10 md:pt-0">

    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
      Sara Enter Passcode ❤️
    </h2>

    <p className="text-base md:text-lg mb-8 md:mb-10 text-white/90 px-2 md:px-0">
      The passcode is the Special Date between us (DD/MM/YY).
    </p>

    {/* Passcode Box */}
<div className=" mb-6 md:mb-0">
  <PasscodeBox passcode={passcode} />
</div>
    {/* Keypad */}
    {!error && (
      <>
        <div className="mt-6 md:mt-8">
          <Keypad onClick={handleClick} />
        </div>

        {/* Next Button */}
        {passcode.length === 6 && (
          <div className="mt-6 md:mt-8 mb-6 md:mb-0">
            <button
              onClick={handleSubmit}
              className="px-8 md:px-10 py-3 rounded-2xl bg-white text-pink-500 font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition duration-300"
            >
              Next
            </button>
          </div>
        )}
      </>
    )}

    {/* Error Card */}
    {error && (
      <div className="mt-8 md:mt-10 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl animate-fadeIn">

        <div className="text-5xl md:text-6xl mb-3 md:mb-4">
          😢
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          غلط يا هانم
        </h2>

        <p className="text-white/80 mb-2 text-sm md:text-base">
          خدي هنت (يوم مميز لينا)
        </p>

        <button
          onClick={handleTryAgain}
          className="mt-4 px-5 py-2 rounded-2xl bg-white text-pink-500 font-bold text-lg hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
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