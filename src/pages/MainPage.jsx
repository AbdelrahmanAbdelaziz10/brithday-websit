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
  const { passcode, isUnlocked, handleClick } = usePasscode();
  const [stage, setStage] = useState("lock");

  useEffect(() => {
    if (isUnlocked) {
      setStage("unlocked");
    }
  }, [isUnlocked]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6fa8dc] via-[#8ec5fc] to-[#d4fc79] flex items-center justify-center relative overflow-hidden">
      <FloatingBubbles />

      <BirthdayOverlay
        isUnlocked={stage === "unlocked"}
        onNext={() => setStage("question")}
      />

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

      {stage === "gift" && (
        <GiftPage />
      )}

      <div className="flex flex-col md:flex-row items-center gap-12">
        <ImageCard isUnlocked={stage === "unlocked"} />

        <div className="text-center text-white">
          <h2 className="text-4xl mb-15 font-bold">
            Sara Enter Passcode
          </h2>

          <p className="text-1xl mb-80">
            The passcode is the Special Date between us (DDMMYY).
          </p>

          <PasscodeBox passcode={passcode} className="mt-15" />

          <Keypad onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}