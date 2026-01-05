import SlideTemplate from "../SlideTemplate";
import OutsideLink from "../../common/OutsideLink";
import gameImage from "./assets/waveSum.png";

const WaveSumAbout = () => {
	return (
		<SlideTemplate>
			<div className="flex-col text-center md:w-[50%]">
				<p>
					WaveSum is a jam game about tweaking parameters of two sine waves in
					order to match their sum to the target.
				</p>
				<br />
				<p>
					It was made using Godot Engine for the GitHub GameOff 2025 Game Jam in
					November 2025. It is published on Itch.io; click the link below to
					play it!
				</p>
				<p>You can also find a link to the repository below.</p>
				<br />
				<div className="flex flex-col align-middle items-center m-auto gap-4">
					<OutsideLink
						title="Play WaveSum"
						link="https://aekai.itch.io/wavesum"
					/>
					<OutsideLink
						title="WaveSum Repository"
						link="https://github.com/azkris/WaveSum"
					/>
				</div>
				<br />
				<img src={gameImage} alt="Screenshot of the game WaveSum" />
			</div>
		</SlideTemplate>
	);
};

export default WaveSumAbout;
