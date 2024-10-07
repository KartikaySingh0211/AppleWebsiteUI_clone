import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";

function Hero() {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760 ? smallHeroVideo : heroVideo
	);
	const isSmallScreen = window.innerWidth < 760;

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleVideoSrcSet);
		return () => {
			window.removeEventListener("resize", handleVideoSrcSet);
		};
	}, []);

	useEffect(() => {
		if (isSmallScreen) {
			gsap.to("#hero", {
				opacity: 1,
				delay: 3,
			});
			gsap.to("#cta", {
				opacity: 1,
				y: -50,
				delay: 3,
			});
		} else {
			gsap.to("#hero", {
				opacity: 1,
				delay: 2,
			});
			gsap.to("#cta", {
				opacity: 1,
				y: -50,
				delay: 1.8,
			});
		}
	}, [isSmallScreen]);

	useGSAP(() => {});

	return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 Pro Max
				</p>
				<div className="md:w-10/12 w-9/12">
					<video
						autoPlay
						muted
						playsInline={true}
						key={videoSrc}
						className="pointer-events-none"
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div
				id="cta"
				className="flex flex-col items-center opacity-0 translate-y-20"
			>
				<a href="#highlights" className="btn">
					Buy
				</a>
				<p className="font-normal text-xl">From ₹119900.00*</p>
			</div>
		</section>
	);
}

export default Hero;
