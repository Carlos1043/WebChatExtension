import React from "react";

export default function Chat() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-grow"></div>
      <div
        className="w-full flex custom-border rounded-bl-lg rounded-br-lg background"
        onClick={e => e.stopPropagation()}
      >
        <input
          className="flex-grow bg-transparent p-2 m-0 hover:no-underline"
          type="text"
          placeholder="Envie uma mensagem"
        />
      </div>
    </div>
  );
}
