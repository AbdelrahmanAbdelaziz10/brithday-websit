import { useState } from "react";
import Keypad from "../components/Keypad";

export default function PasscodePage() {
  const [code, setCode] = useState([]);

  const handleClick = (value) => {
    if (value === "clear") {
      setCode([]);
      return;
    }

    if (code.length < 6) {
      setCode([...code, value]);
    }
  };

  const handleEnter = () => {
    alert("Entered Code: " + code.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-100 p-4">
      
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">

        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="memory"
            className="w-52 h-52 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center w-full md:w-2/3">

          {/* Title */}
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Enter Passcode
          </h2>

          {/* Dots */}
  <div className="w-full max-w-[260px] h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
  <div className="flex gap-2 text-pink-500 text-xl font-semibold tracking-widest">
    {code.map((num, i) => (
      <span key={i}>{num}</span>
    ))}
  </div>
</div>

          {/* Keypad Component */}
          <Keypad onClick={handleClick} />

          {/* Enter Button */}
          <button
            onClick={handleEnter}
            className="mt-6 w-full max-w-[220px] py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 active:scale-95 transition"
          >
            Enter
          </button>

          {/* Text */}
          <p className="mt-6 text-center text-sm font-medium text-gray-700">
            تقدر دلوقتي تعمل ويب سايت لأي حد ❤️  
            <br />
            عزيز عليك بالمناسبة اللي تحبها
          </p>

        </div>
      </div>
    </div>
  );
}