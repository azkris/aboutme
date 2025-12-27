import SlideTemplate from "./SlideTemplate";

const ExampleSlide1 = () => {
	return (
		<SlideTemplate>
			<h1 className="text-3xl font-bold mb-4">GitHub</h1>
			<a href="https://github.com/yourname" className="text-blue-300 underline">
				Visit my GitHub
			</a>
		</SlideTemplate>
	);
};

export default ExampleSlide1;
