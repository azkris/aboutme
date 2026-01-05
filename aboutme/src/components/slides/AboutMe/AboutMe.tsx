import SlideTemplate from "../SlideTemplate";
import OutsideLink from "../../common/OutsideLink";

const AboutMeSlide = () => {
	return (
		<SlideTemplate>
			<div className="flex flex-row gap-6 text-sm sm:text-base align-middle m-auto">
				<div className="text-left basis-1/2">
					<p className="text-xl">Hello!</p>
					<br />
					<p>
						My name is Anže. I'm a software engineer interested in Devops,
						Fullstack or Backend roles.
					</p>
					<br />
					<p>I graduated with an MSc in Computer Science in 2025.</p>
				</div>
				<div className="flex flex-col gap-4 text-left basis-1/2 items-end">
					<p className="text-right">You can find my socials here:</p>
					<OutsideLink title="GitHub" link="https://github.com/azkris" />
					<OutsideLink
						title="LinkedIn"
						link="https://linkedin.com/in/anze-kristan/"
					/>
					<OutsideLink title="Itch.io" link="https://aekai.itch.io/" />
				</div>
			</div>
		</SlideTemplate>
	);
};

export default AboutMeSlide;
