import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import ScrollTrigger from "gsap/ScrollTrigger";

function Highlights() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(
			"#title",
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.3,
				scrollTrigger: {
					trigger: "#highlights",
					start: "top 80%",
					toggleActions: "restart reverse restart reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
				},
			},
			[]
		);
		gsap.to(
			".link",
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				stagger: 0.25,
				scrollTrigger: {
					trigger: "#highlights",
					start: "top 80%",
					toggleActions: "restart reverse restart reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
				},
			},
			[]
		);
	});

	return (
		<section
			id="highlights"
			className="w-screen overflow-hidden h-full common-padding bg-zinc"
		>
			<div className="screen-max-width">
				<div className="mb-12 w-full md:flex items-end justify-between">
					<h1 id="title" className="section-heading">
						Get the highlights.
					</h1>
					<div className="flex flex-wrap items-end gap-5">
						<p className="link ml-1">
							Watch the film <img src={watchImg} alt="watch" className="ml-2" />
						</p>
						<p className="link ml-1">
							Watch the event{" "}
							<img src={rightImg} alt="right" className="ml-2" />
						</p>
					</div>
				</div>
				<VideoCarousel />
			</div>
		</section>
	);
}

export default Highlights;
