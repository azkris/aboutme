import React from "react";

const Background: React.FC = () => {
  return (
    <div
      className="
        fixed inset-0
        bg-gradient-to-tl from-slate-900 via-blue-950 to-indigo-900
        overflow-hidden
        -z-10
      "
    >
    <div className="
      absolute inset-0 
      bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%)]
    " />
  </div>
  );
};

export default Background;