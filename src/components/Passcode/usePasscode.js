import { useState } from "react";

export default function usePasscode() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleDelete = () => {
    if (isUnlocked) return;
    setPasscode((prev) => prev.slice(0, -1));
  };

  const handleClick = (num) => {
    if (isUnlocked) return;

    if (num === "#") return handleDelete();
    if (typeof num !== "number") return;

    setPasscode((prev) => {
      const updated = prev + num;

      if (updated.length === 6) {
        setTimeout(() => setIsUnlocked(true), 400);
      }

      return updated.length <= 6 ? updated : prev;
    });
  };

  return { passcode, isUnlocked, handleClick };
}