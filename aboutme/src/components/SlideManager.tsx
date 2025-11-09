import React, { useState, useEffect, useCallback } from "react";
import Slide from "./Slide";

const SlideManager: React.FC = () => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  // Define your content structure
  const topics = [
    {
      title: "Personal Links",
      slides: ["GitHub", "LinkedIn", "Email"],
    },
    {
      title: "Projects 1",
      slides: ["Project A", "Project B", "Project C"],
    },
    {
      title: "Projects 2",
      slides: ["Project D", "Project E"],
    },
  ];

  const currentTopic = topics[topicIndex];
  const currentSlide = currentTopic.slides[slideIndex];

  // --- Navigation handlers ---
  const nextSlide = useCallback(() => {
    setSlideIndex((i) => (i + 1) % currentTopic.slides.length);
  }, [currentTopic]);

  const prevSlide = useCallback(() => {
    setSlideIndex((i) => (i - 1 + currentTopic.slides.length) % currentTopic.slides.length);
  }, [currentTopic]);

  const nextTopic = useCallback(() => {
    setTopicIndex((i) => (i + 1) % topics.length);
    setSlideIndex(0);
  }, [topics.length]);

  const prevTopic = useCallback(() => {
    setTopicIndex((i) => (i - 1 + topics.length) % topics.length);
    setSlideIndex(0);
  }, [topics.length]);

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
    [nextSlide, prevSlide, nextTopic, prevTopic]
  );

  // Attach/detach the keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between bg-transparent rounded-xl overflow-hidden border-4 border-red/30">
      {/* Top Edge Button (Prev Topic) */}
      <div className="flex w-full justify-between px-6 py-2 absolute top-0">
        <button
          onClick={prevTopic}
          className="w-12 h-12 bg-white/10 text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center"
        >
          ↑
        </button>
      </div>

      {/* Topic Title */}
      <h2 className="text-xl font-semibold text-white mt-4 opacity-90">
        {currentTopic.title}
      </h2>

      {/* Centered Slide Content */}
      <div className="flex-grow flex justify-center items-center mb-8">
        <Slide title={currentSlide} />
      </div>

      {/* Bottom Edge Button (Next Topic) */}
      <div className="flex w-full justify-between px-6 py-2 absolute bottom-0">
        <button
          onClick={nextTopic}
          className="w-12 h-12 bg-white/10 text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center"
        >
          ↓
        </button>
      </div>

      {/* Left Edge Button (Prev Slide) */}
      <div className="flex items-center absolute left-0 top-0 bottom-0 py-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center"
        >
          ←
        </button>
      </div>

      {/* Right Edge Button (Next Slide) */}
      <div className="flex items-center absolute right-0 top-0 bottom-0 py-6">
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SlideManager;
