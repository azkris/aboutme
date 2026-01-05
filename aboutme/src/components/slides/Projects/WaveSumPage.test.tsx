import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import WaveSumAbout from "./WaveSumAbout";

describe("Slide component", () => {
	it("renders slide content", () => {
		render(<WaveSumAbout />);
		const element = screen.getByText(/Game jam/i, { exact: false });
		expect(element).toBeInTheDocument();
		const links = document.querySelector("a");
		expect(links).toBeInTheDocument();
		expect(document.querySelector("img")).toBeInTheDocument();
	});
});
