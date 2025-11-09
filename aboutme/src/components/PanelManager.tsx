import React, { useState, useEffect, useCallback } from "react";
import CentralPanel from "./CentralPanel";
import Slide from "./Slide";

const PanelManager: React.FC = () => {
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
    <CentralPanel>
      <h2 className="text-lg font-semibold mb-4 text-center">
        {currentTopic.title}
      </h2>

      <div className="flex justify-center">
        <Slide title={currentSlide} />
      </div>

      {/* On-screen buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevTopic}
          className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
        >
          ↑ Topic
        </button>

        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
          >
            →
          </button>
        </div>

        <button
          onClick={nextTopic}
          className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
        >
          ↓ Topic
        </button>
      </div>
    </CentralPanel>
  );
};

export default PanelManager;
