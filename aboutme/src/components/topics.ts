import AboutMeSlide from "./slides/AboutMe/AboutMe";
import WelcomeSlide from "./slides/AboutMe/WelcomePage";
import CVAbout from "./slides/Projects/CVAbout";
import FlockTogetherAbout from "./slides/Projects/FlockTogetherSlide";
import PfoAbout from "./slides/Projects/PfoAbout";
import WaveSumAbout from "./slides/Projects/WaveSumAbout";

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
	{
		title: "WaveSum Game",
		slides: [WaveSumAbout],
	},
	{
		title: "Flock Together Game",
		slides: [FlockTogetherAbout],
	},
];
