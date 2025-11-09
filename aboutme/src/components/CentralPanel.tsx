import React from "react";
import Slide from "./Slide";

interface CentralPanelProps {
  children?: React.ReactNode;
}

const CentralPanel: React.FC<CentralPanelProps> = ({ children }) => {
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
      {children ?? (
        <div className="text-center text-lg font-medium opacity-90">
          <Slide></Slide>
        </div>
      )}
    </div>
  );
};

export default CentralPanel;
