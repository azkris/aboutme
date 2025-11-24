import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App component", () => {
	it("renders Vite + React text in the App component", () => {
		render(<App />);
		const element = screen.getByRole("main");
		expect(element).toBeInTheDocument();
	});
});
