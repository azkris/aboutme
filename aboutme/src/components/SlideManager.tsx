import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { topics } from "./topics";

const SlideManager: React.FC = () => {
	const [topicIndex, setTopicIndex] = useState(0);
	const [slideIndex, setSlideIndex] = useState(0);

	const currentTopic = topics[topicIndex];
	const CurrentSlide = currentTopic.slides[slideIndex];

	// --- Navigation handlers ---
	const nextSlide = useCallback(() => {
		setSlideIndex((i) => (i + 1) % currentTopic.slides.length);
	}, [currentTopic]);

	const prevSlide = useCallback(() => {
		setSlideIndex(
			(i) => (i - 1 + currentTopic.slides.length) % currentTopic.slides.length,
		);
	}, [currentTopic]);

	const nextTopic = useCallback(() => {
		setTopicIndex((i) => (i + 1) % topics.length);
		setSlideIndex(0);
	}, []);

	const prevTopic = useCallback(() => {
		setTopicIndex((i) => (i - 1 + topics.length) % topics.length);
		setSlideIndex(0);
	}, []);

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
			<div className="p-12">
				<h2 className="text-xl font-semibold text-white mt-4 opacity-90 text-center">
					{currentTopic.title}
				</h2>

				{/* Slide Content */}
				<div className="relative grow flex justify-center items-center w-[800px] h-[400px]">
					{/* Fixed panel area */}
					<div className="w-full h-full overflow-hidden rounded-xl">
						<CurrentSlide />
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
