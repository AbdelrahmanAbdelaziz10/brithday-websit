import { useState } from "react";

export default function usePasscode() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const correctPasscode = "23/525";

  const handleDelete = () => {
    if (isUnlocked) return;

    setPasscode((prev) => prev.slice(0, -1));
  };

  const handleClick = (num) => {
    if (isUnlocked) return;

    if (num === "#") {
      return handleDelete();
    }

if (num !== "/" && typeof num !== "number") return;

    setError(false);

    setPasscode((prev) => {
      if (prev.length >= 6) return prev;

      return prev + num;
    });
  };

  const handleSubmit = () => {
    if (passcode === correctPasscode) {
      setTimeout(() => {
        setIsUnlocked(true);
      }, 300);
    } else {
      setError(true);
    }
  };

  const handleTryAgain = () => {
    setPasscode("");
    setError(false);
  };

  return {
    passcode,
    isUnlocked,
    error,
    handleClick,
    handleSubmit,
    handleTryAgain,
  };
}