import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";

export default function App() {
  const isListeningPosRef = useRef(false);
  const isListeningSizeRef = useRef(false);
  const [pos, setPos] = useState({ top: 5, left: 5 });
  const startPosRef = useRef<{
    top: number;
    left: number;
  } | null>(null);
  const startSizeRef = useRef<{
    height: number;
    width: number;
  } | null>(null);
  const [size, setSize] = useState({ height: 400, width: 300 });
  const mouseStartPosRef = useRef<{ top: number; left: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isListeningPosRef.current) {
      startPosRef.current = pos;
      isListeningPosRef.current = false;
      containerRef.current!.style.cursor = "-webkit-grab";
      return;
    }

    isListeningPosRef.current = true;
    containerRef.current!.style.cursor = "grabbing";
    startPosRef.current = pos;
    mouseStartPosRef.current = { top: e.clientY, left: e.clientX };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isListeningPosRef.current) {
      setPos({
        top:
          startPosRef.current!.top +
          (e.clientY - mouseStartPosRef.current!.top),
        left:
          startPosRef.current!.left +
          (e.clientX - mouseStartPosRef.current!.left)
      });
    }

    if (isListeningSizeRef.current) {
      setPos({
        top:
          startPosRef.current!.top +
          (e.clientY - mouseStartPosRef.current!.top),
        left: startPosRef.current!.left
      });
      setSize({
        height:
          startSizeRef.current!.height -
          (e.clientY - mouseStartPosRef.current!.top),
        width:
          startSizeRef.current!.width +
          (e.clientX - mouseStartPosRef.current!.left)
      });
    }
  };

  const handleSizeButtonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (isListeningSizeRef.current) {
      startPosRef.current = pos;
      startSizeRef.current = size;
      isListeningSizeRef.current = false;
      return;
    }

    isListeningSizeRef.current = true;
    startPosRef.current = pos;
    startSizeRef.current = size;
    mouseStartPosRef.current = { top: e.clientY, left: e.clientX };
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed z-[1000000] rounded-lg custom-border backdrop-blur-sm background text-black"
      style={{
        top: pos.top,
        left: pos.left,
        height: size.height,
        width: size.width
      }}
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <Chat />
        <div
          className="absolute top-0 right-0 cursor-nesw-resize w-5 h-5 bg-gray-400 rounded-tr-lg rounded-bl-lg"
          onClick={handleSizeButtonClick}
        />
      </div>
    </div>
  );
}
