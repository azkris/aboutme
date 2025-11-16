import React from "react";
import SlideManager from "./SlideManager";

interface CentralPanelProps {
	children?: React.ReactNode;
}

const CentralPanel: React.FC<CentralPanelProps> = () => {
	return (
		<div
			className="
        w-[90%] sm:w-3/4 
        mx-auto 
        h-[75vh]
        rounded-3xl
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        shadow-2xl 
        text-white
        overflow-clip
      "
		>
			<SlideManager />
		</div>
	);
};

export default CentralPanel;
