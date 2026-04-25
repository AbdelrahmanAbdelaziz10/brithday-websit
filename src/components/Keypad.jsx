export default function Keypad({ onClick }) {
  const numbers = [1,2,3,4,5,6,7,8,9];

  return (
    <div className="grid grid-cols-3 gap-4">
      
      {numbers.map((num) => (
        <button
          key={num}
          onClick={() => onClick(num)}
          className="w-16 h-16 rounded-xl bg-white shadow-md text-lg font-semibold hover:bg-gray-100 active:scale-95 transition"
        >
          {num}
        </button>
      ))}

      {/* Clear */}
      <button
        onClick={() => onClick("clear")}
        className="w-16 h-16 rounded-xl bg-red-100 text-red-500 font-medium hover:bg-red-200"
      >
        Clear
      </button>

      {/* Zero */}
      <button
        onClick={() => onClick(0)}
        className="w-16 h-16 rounded-xl bg-white shadow-md text-lg font-semibold hover:bg-gray-100"
      >
        0
      </button>

      {/* Empty space */}
      <div></div>

    </div>
  );
}