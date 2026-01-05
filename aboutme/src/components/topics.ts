import AboutMeSlide from "./slides/AboutMe/AboutMe";
import WelcomeSlide from "./slides/AboutMe/WelcomePage";
import ExampleSlide1 from "./slides/Exampleslide1";

// ----- Types -----
export type SlideComponent = React.FC;

export interface Topic {
	title: string;
	slides: SlideComponent[];
}

// ----- Topic Definitions -----
export const topics: Topic[] = [
	{
		title: "AboutMe",
		slides: [WelcomeSlide, AboutMeSlide],
	},
	{
		title: "Projects 1",
		slides: [ExampleSlide1],
	},
	{
		title: "Projects 2",
		slides: [ExampleSlide1],
	},
];
