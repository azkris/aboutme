import React from "react";
import SlideManager from "./SlideManager";

interface CentralPanelProps {
  children?: React.ReactNode;
}

const CentralPanel: React.FC<CentralPanelProps> = () => {
  return (
    <div
      className="
        relative 
        w-[90%] sm:w-3/4 
        mx-auto 
        h-[75vh]
        rounded-3xl
        p-6 sm:p-8
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        shadow-2xl 
        text-white 
        transition-all
        duration-500
      "
    >
      <SlideManager />
    </div>
  );
};

export default CentralPanel;
