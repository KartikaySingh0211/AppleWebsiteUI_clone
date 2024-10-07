import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
			<nav className="flex w-full screen-max-width">
				<img
					src={appleImg}
					alt="Apple"
					width={14}
					height={14}
					className="cursor-pointer"
				/>

				<div className="flex flex-1 justify-center max-sm:hidden ">
					{navLists.map((nav, i) => (
						<div
							key={i}
							className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
						>
							{nav}
						</div>
					))}
				</div>

				<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
					<img
						src={searchImg}
						alt="search"
						width={15}
						height={15}
						className="hover:scale-110 transition-all cursor-pointer"
					/>
					<img
						src={bagImg}
						alt="bag"
						width={15}
						height={15}
						className=" hover:scale-110 transition-all cursor-pointer"
					/>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
