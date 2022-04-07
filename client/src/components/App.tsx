import React, { useRef, useState } from "react";

export default function App() {
  const [isListening, setIsListening] = useState(false);
  const startPosRef = useRef<{
    top: number;
    left: number;
  } | null>(null);
  const [pos, setPos] = useState({ top: 5, left: 5 });
  const mouseStartPosRef = useRef<{ top: number; left: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isListening) {
      startPosRef.current = pos;
      setIsListening(false);
      return;
    }

    setIsListening(true);
    startPosRef.current = pos;
    mouseStartPosRef.current = { top: e.clientY, left: e.clientX };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isListening) return;

    setPos({
      top:
        startPosRef.current!.top + (e.clientY - mouseStartPosRef.current!.top),
      left:
        startPosRef.current!.left + (e.clientX - mouseStartPosRef.current!.left)
    });
  };

  return (
    <div
      className="fixed w-[200px] h-[300px] z-[1000000] bg-blue-500 rounded-lg"
      style={{
        top: pos.top,
        left: pos.left,
        cursor: isListening ? "grabbing" : "-webkit-grab"
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
