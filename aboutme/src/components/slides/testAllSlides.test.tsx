// src/slides/__tests__/AllSlidesOverflow.test.tsx
import { test } from "vitest";
import { expectNoOverflow } from "./testSlideLayout";

// Import all slides manually or auto-discover
import ExampleSlide1 from "./Exampleslide1";
//...

const slides = [
	ExampleSlide1,
	// ...
];

slides.forEach((SlideComponent, index) => {
	test(`Slide #${index} (${SlideComponent.name}) does not overflow`, () => {
		expectNoOverflow(<SlideComponent />);
	});
});
