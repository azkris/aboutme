import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { topics } from "./topics";
import { AnimatePresence, motion } from "framer-motion";

const SlideManager: React.FC = () => {
	const [topicIndex, setTopicIndex] = useState(0);
	const [slideIndex, setSlideIndex] = useState(0);

	const currentTopic = topics[topicIndex];
	const CurrentSlide = currentTopic.slides[slideIndex];

	// --- Navigation handlers ---
	const [direction, setDirection] = useState<"left" | "right" | "up" | "down">(
		"right",
	);

	const nextSlide = useCallback(() => {
		setDirection("right");
		setSlideIndex((i) => (i + 1) % currentTopic.slides.length);
	}, [currentTopic]);

	const prevSlide = useCallback(() => {
		setDirection("left");
		setSlideIndex(
			(i) => (i - 1 + currentTopic.slides.length) % currentTopic.slides.length,
		);
	}, [currentTopic]);

	const nextTopic = useCallback(() => {
		setDirection("down");
		setTopicIndex((i) => (i + 1) % topics.length);
		setSlideIndex(0);
	}, []);

	const prevTopic = useCallback(() => {
		setDirection("up");
		setTopicIndex((i) => (i - 1 + topics.length) % topics.length);
		setSlideIndex(0);
	}, []);

	const slideVariants = {
		enter: (direction: "left" | "right" | "up" | "down") => ({
			x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
			y: direction === "up" ? -200 : direction === "down" ? 200 : 0,
			opacity: 0,
		}),
		center: {
			x: 0,
			y: 0,
			opacity: 1,
		},
		exit: (direction: "left" | "right" | "up" | "down") => ({
			x: direction === "left" ? 200 : direction === "right" ? -200 : 0,
			y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
			opacity: 0,
		}),
	};

	// --- Keyboard handling ---
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
				case "ArrowRight":
				case "d":
				case "D":
					nextSlide();
					break;
				case "ArrowLeft":
				case "a":
				case "A":
					prevSlide();
					break;
				case "ArrowUp":
				case "w":
				case "W":
					prevTopic();
					break;
				case "ArrowDown":
				case "s":
				case "S":
					nextTopic();
					break;
			}
		},
		[nextSlide, prevSlide, nextTopic, prevTopic],
	);

	// Attach/detach the keyboard listener
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-between bg-transparent rounded-xl overflow-hidden">
			{/* Top Edge Button (Prev Topic) */}
			<div className="flex w-full justify-between absolute top-0">
				<button
					onClick={prevTopic}
					className="w-full h-12 text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:border-b border-solid border-0 border-white/10 flex items-center justify-center"
				>
					↑
				</button>
			</div>

			{/* Topic Title */}
			<div className="pt-12">
				<p className="text-sm/1 font-semibold text-white mt-4 opacity-70 text-center">
					Topic {topicIndex + 1} / {topics.length}
				</p>
				<h2 className="text-xl/4 font-semibold text-white mt-4 opacity-90 text-center m-0 p-0 line-ga">
					{currentTopic.title}
				</h2>
				<p className="text-sm/1 font-semibold text-white mt-4 opacity-70 text-center">
					Slide {slideIndex + 1} / {currentTopic.slides.length}
				</p>

				{/* Slide Content */}
				<div className="relative grow flex justify-center items-center w-[800px] h-[400px]">
					{/* Fixed panel area */}
					<div className="w-full h-full overflow-hidden rounded-xl">
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={`${topicIndex}-${slideIndex}`}
								custom={direction}
								variants={slideVariants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ duration: 0.25, ease: "easeInOut" }}
								className="w-full h-full"
							>
								<CurrentSlide />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* Left Edge Button (Prev Slide) */}
			<div className="flex items-center absolute left-0 top-0 bottom-0">
				<button
					onClick={prevSlide}
					className="w-12 h-full text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:border-r border-solid border-0 border-white/10 flex items-center justify-center"
				>
					←
				</button>
			</div>

			{/* Right Edge Button (Next Slide) */}
			<div className="flex items-center absolute right-0 top-0 bottom-0">
				<button
					onClick={nextSlide}
					className="w-12 h-full text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:border-l border-solid border-0 border-white/10 flex items-center justify-center"
				>
					→
				</button>
			</div>

			{/* Bottom Edge Button (Next Topic) */}
			<div className="flex w-full justify-between absolute bottom-0">
				<button
					onClick={nextTopic}
					className="w-full h-12 text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:border-t border-solid border-0 border-white/10 flex items-center justify-center"
				>
					↓
				</button>
			</div>
		</div>
	);
};

export default SlideManager;
