import type { ReactNode } from "react";

interface SlideTemplateProps {
	children: ReactNode;
}

const SlideTemplate = ({ children }: SlideTemplateProps) => {
	return (
		<div
			className="
        w-full h-full
        overflow-auto
        flex flex-col items-center justify-center
        p-8
        text-white
      "
		>
			{children}
		</div>
	);
};

export default SlideTemplate;
