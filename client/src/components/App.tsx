import React, { useRef, useState } from "react";

export default function App() {
  const [isListeningPos, setIsListeningPos] = useState(false);
  const [isListeningSize, setIsListeningSize] = useState(false);
  const startPosRef = useRef<{
    top: number;
    left: number;
  } | null>(null);
  const startSizeRef = useRef<{
    height: number;
    width: number;
  } | null>(null);
  const [pos, setPos] = useState({ top: 5, left: 5 });
  const [size, setSize] = useState({ height: 300, width: 200 });
  const mouseStartPosRef = useRef<{ top: number; left: number } | null>(null);

  // Handling position change
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isListeningPos) {
      startPosRef.current = pos;
      setIsListeningPos(false);
      return;
    }

    setIsListeningPos(true);
    startPosRef.current = pos;
    mouseStartPosRef.current = { top: e.clientY, left: e.clientX };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isListeningPos) return;

    setPos({
      top:
        startPosRef.current!.top + (e.clientY - mouseStartPosRef.current!.top),
      left:
        startPosRef.current!.left + (e.clientX - mouseStartPosRef.current!.left)
    });
  };

  // Handling size change
  const handleSizeButtonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (isListeningSize) {
      startSizeRef.current = size;
      setIsListeningSize(false);
      return;
    }

    setIsListeningSize(true);
    startSizeRef.current = size;
    mouseStartPosRef.current = { top: e.clientY, left: e.clientX };
  };

  const handleSizeButtonMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isListeningSize) return;

    setSize({
      height:
        startSizeRef.current!.height +
        (e.clientY - mouseStartPosRef.current!.top),
      width:
        startSizeRef.current!.width +
        (e.clientX - mouseStartPosRef.current!.left)
    });
  };

  return (
    <div
      className="fixed z-[1000000] bg-blue-500 rounded-lg"
      style={{
        top: pos.top,
        left: pos.left,
        height: size.height,
        width: size.width,
        cursor: isListeningPos ? "grabbing" : "-webkit-grab"
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute bottom-0 right-0 cursor-nwse-resize w-5 h-5 bg-red-900 rounded-br-lg"
          onClick={handleSizeButtonClick}
          onMouseMove={handleSizeButtonMouseMove}
        ></div>
      </div>
    </div>
  );
}
