import SlideTemplate from "../../SlideTemplate";
import OutsideLink from "../../../common/OutsideLink";

const CVAbout = () => {
	return (
		<SlideTemplate>
			<div className="flex-col text-center md:w-[50%]">
				<p>
					A CV generator targeting programmers and/or web developers, using EJS
					templates to generate HTML files. It uses a JSON file for content,
					then generates 3 html and uses playwright to generate pdf files. One
					is color, the second one is black & white print friendly and the last
					one is a single-column ATS/machine friendly layout.
				</p>
				<br />
				<p>
					You can see the generated CVs with placeholder information on GitHub
					Pages of the project (links below).
				</p>
				<br />
				<div className="flex flex-col align-middle items-center m-auto gap-6">
					<OutsideLink
						title="GitHub Repository"
						link="https://github.com/azkris/html-cv"
					/>
					<OutsideLink
						title="Color CV"
						link="https://azkris.github.io/html-cv/"
					/>
					<OutsideLink
						title="B&W CV"
						link="https://azkris.github.io/html-cv/index-bw.html"
					/>
					<OutsideLink
						title="ATS CV"
						link="https://azkris.github.io/html-cv/index-bw-ats.html"
					/>
				</div>
			</div>
		</SlideTemplate>
	);
};

export default CVAbout;
