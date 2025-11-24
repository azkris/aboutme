// src/tests/utils/testSlideLayout.ts
import { render } from "@testing-library/react";
import type { JSX } from "react";
import { expect } from "vitest";

export function expectNoOverflow(slideElement: JSX.Element) {
	// The size your SlideManager uses:
	const width = 800;
	const height = 400;

	const { container } = render(
		<div
			style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
		>
			{slideElement}
		</div>,
	);

	const el = container.firstElementChild as HTMLElement;

	// Basic overflow checks
	expect(el.scrollHeight <= el.clientHeight).toBe(true);
	expect(el.scrollWidth <= el.clientWidth).toBe(true);
}
