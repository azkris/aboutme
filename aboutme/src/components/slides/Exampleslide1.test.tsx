import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import ExampleSlide1 from "./Exampleslide1";

describe("Slide component", () => {
	it("renders slide content", () => {
		render(<ExampleSlide1 />);
		const element = screen.getByText(/Visit my GitHub/i, { exact: false });
		expect(element).toBeInTheDocument();
	});
});
