import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import AboutMe from "./AboutMe";

describe("Slide component", () => {
	it("renders slide content", () => {
		render(<AboutMe />);
		const element = screen.getByText(/Hello/i, { exact: false });
		expect(element).toBeInTheDocument();
		const links = document.querySelector("a");
		expect(links).toBeInTheDocument();
	});
});
