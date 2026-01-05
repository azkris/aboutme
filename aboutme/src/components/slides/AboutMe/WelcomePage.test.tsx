import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import WelcomePage from "./WelcomePage";

describe("Slide component", () => {
	it("renders slide content", () => {
		render(<WelcomePage />);
		const element = screen.getByText(/Welcome/i, { exact: false });
		expect(element).toBeInTheDocument();
	});
});
