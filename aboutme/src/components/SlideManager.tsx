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
    <div className="relative w-full h-[50vh] flex justify-center items-center mb-4 bg-transparent rounded-xl overflow-hidden">
      {/* Render the current slide */}
      <Slide title={currentSlide} />

      {/* On-Screen Navigation Buttons */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-6 py-4">
        {/* Left edge button (Prev Topic) */}
        <button
          onClick={prevTopic}
          className="w-1/3 h-full bg-white/10 text-white text-center rounded-lg hover:bg-white/20 transition-all duration-200 focus:outline-none"
        >
          ↑ Topic
        </button>

        {/* Center buttons for slides */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 focus:outline-none"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 focus:outline-none"
          >
            →
          </button>
        </div>

        {/* Right edge button (Next Topic) */}
        <button
          onClick={nextTopic}
          className="w-1/3 h-full bg-white/10 text-white text-center rounded-lg hover:bg-white/20 transition-all duration-200 focus:outline-none"
        >
          ↓ Topic
        </button>
      </div>
    </div>
  );
};

export default SlideManager;
