import SlideTemplate from "../../SlideTemplate";
import OutsideLink from "../../../common/OutsideLink";

const PfoAbout = () => {
	return (
		<SlideTemplate>
			<div className="flex-col text-center md:w-[50%]">
				<p>This is the site you're looking at right now!</p>
				<br />
				<p>
					It was made using Vite, React, Tailwindcss. It was also an opportunity
					to learn docker and GitHub Actions CI/CD to build and deploy to GitHub
					Pages.
				</p>
				<br />
				<div className="flex flex-col align-middle items-center m-auto">
					<OutsideLink
						title="GitHub Repository"
						link="https://github.com/azkris/aboutme"
					/>
				</div>
			</div>
		</SlideTemplate>
	);
};

export default PfoAbout;
