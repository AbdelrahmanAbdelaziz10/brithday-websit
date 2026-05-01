import NumberButton from "./Passcode/NumberButton";

export default function Keypad({ onClick }) {
  const numbers = [1,2,3,4,5,6,7,8,9,"*",0,"#"];

  return (
    <div className="grid grid-cols-3 gap-3 w-[240px] mx-auto">
      {numbers.map((num, i) => (
        <NumberButton key={i} num={num} onClick={onClick} />
      ))}
    </div>
  );
}