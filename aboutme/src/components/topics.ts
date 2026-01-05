import AboutMeSlide from "./slides/AboutMe/AboutMe";
import WelcomeSlide from "./slides/AboutMe/WelcomePage";
import ExampleSlide1 from "./slides/Exampleslide1";
import CVAbout from "./slides/Projects/CVAbout";
import PfoAbout from "./slides/Projects/PfoAbout";

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
		title: "Portfolio Site Project",
		slides: [PfoAbout],
	},
	{
		title: "HTML CV Generator",
		slides: [CVAbout],
	},
];
