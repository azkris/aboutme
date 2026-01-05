import SlideTemplate from "../SlideTemplate";

const WelcomeSlide = () => {
	return (
		<SlideTemplate>
			<h1 className="text-3xl font-bold mb-4">Hello!</h1>
			<div className="grid grid-cols-1 gap-4 sm:text-xs lg:text-base align-middle m-auto md:max-w-[50%]">
				<p className="text-left">
					Welcome to my portfolio showcase site. You can use up/down arrows to
					move between topics and left/right arrows to move between slides in a
					topic. Click on the right arrow to see information about me.
				</p>

				<p>
					Tip: if you're using a keyboard, you can also use WASD keys instead of
					arrow keys.
				</p>
			</div>
		</SlideTemplate>
	);
};

export default WelcomeSlide;
