import usePasscode from "../components/Passcode/usePasscode";
import PasscodeBox from "../components/Passcode/PasscodeBox";
import ImageCard from "../components/ImageCard";
import BirthdayOverlay from "../components/BirthdayOverlay";
import FloatingBubbles from "../components/FloatingBubbles";
import Keypad from "../components/Keypad";
import LoveQuestion from "../components/LoveQuestion";
import { useState, useEffect } from "react";

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
    onYes={() => setStage("final")}
    onNo={() => alert("😏 مفيش NO")}
  />
)}
      <div className="flex flex-col md:flex-row items-center gap-12">

<ImageCard isUnlocked={stage === "unlocked"} />

        <div className="text-center text-white">
          <h2 className="text-2xl mb-8 font-bold">
            Enter Passcode 🔐
          </h2>

          <PasscodeBox passcode={passcode} />

          <Keypad onClick={handleClick} />
        </div>

      </div>
    </div>
  );
}