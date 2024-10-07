import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorks = () => {
	const videoRef = useRef();

	useGSAP(() => {
		gsap.from("#chip", {
			scrollTrigger: {
				trigger: "#chip",
				start: "20% bottom",
				toggleActions: "play pause restart reverse",
			},
			opacity: 0,
			scale: 2,
			duration: 2,
			ease: "power2.inOut",
		});
		gsap.to(".g_fadeIn", {
			opacity: 1,
			duration: 1,
			y: 0,
		});
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<div id="chip" className="flex-center w-full my-20">
					<img src={chipImg} alt="chip" width={100} height={100} />
				</div>
				<div className="flex flex-col items-center">
					<h2 className="hiw-title">
						A17 Pro chip.
						<br /> A monster win for gaming.
					</h2>
					<p className="hiw-subtitle">
						It&apos;s here. The biggest redesign in the history of Apple GPUs.
					</p>
				</div>
				<div className="mt-10 md:mt-20 mb-14">
					<div className="relative h-full flex-center">
						<div className="overflow-hidden">
							<img
								src={frameImg}
								alt="frame"
								className="bg-transparent relative z-10"
							/>
						</div>
						<div className="hiw-video">
							<video
								className="pointer-events-none"
								playsInline
								preload="none"
								muted
								autoPlay
								ref={videoRef}
							>
								<source src={frameVideo} type="video/mp4" />
							</video>
						</div>
					</div>
					<p className="text-gray font-semibold text-center mt-3">
						Honkai: Star Rail
					</p>
				</div>
				<div className="hiw-text-container">
					<div className="flex flex-1 justify-center flex-col">
						<p className="hiw-text g_fadeIn">
							A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
							<span className="text-white">
								best graphics performance by far.
							</span>
						</p>

						<p className="hiw-text g_fadeIn mt-10">
							Mobile{" "}
							<span className="text-white">
								games will look and feel so immersive
							</span>
							with incredible detail and smoothness.
						</p>
					</div>
					<div className="flex-1 flex justify-center flex-col g_fadeIn">
						<p className="hiw-text">New</p>
						<p className="hiw-bigtext">Pro-class GPU</p>
						<p className="hiw-text">with 6 cores</p>
					</div>
				</div>
			</div>{" "}
		</section>
	);
};

export default HowItWorks;
