import SlideTemplate from "../SlideTemplate";
import OutsideLink from "../../common/OutsideLink";
import gameImage from "./assets/flockTogether.png";

const FlockTogetherAbout = () => {
	return (
		<SlideTemplate>
			<div className="flex-col text-center md:w-[50%]">
				<p>
					Flock Together is a jam game about controlling a flock of birds with
					your mouse. Collect eggs to grow your flock and avoid getting eaten.
					The game features a satisfying Boids flocking behaviour and includes a
					relaxing Zen mode.
				</p>
				<br />
				<p>
					It was made using Unity Engine for the Brackeys Game Jam 2021.1. It is
					published on Itch.io; click the link below to play it!
				</p>
				<p>You can also find a link to the repository below.</p>
				<br />
				<div className="flex flex-col align-middle items-center m-auto gap-4">
					<OutsideLink
						title="Play Flock Together"
						link="https://aekai.itch.io/flock-together"
					/>
				</div>
				<br />
				<img src={gameImage} alt="Screenshot of the game Flock Together" />
			</div>
		</SlideTemplate>
	);
};

export default FlockTogetherAbout;
