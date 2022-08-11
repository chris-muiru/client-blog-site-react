import React from "react"
import NavBarView from "../Dashboard/NavBarView"
import SocialsIcons from "../Socials/SocialsIcons"

const AboutView = () => {
	return (
		<div>
			<NavBarView />
			<div className="rounded-md bg-white min-h-[200px] font-semibold w-3/4 container m-auto pt-3 mt-14">
				<p className="text-yellow-600 font-bold text-center">What we do</p>

				<div className="p-10 text-slate-900 font-semibold">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
					possimus cupiditate dolorum, qui inventore vel praesentium
					impedit incidunt optio? Quam ex consequuntur autem doloribus
					expedita vitae vero quibusdam quasi quas.
				</div>
			</div>
			<div>
				<SocialsIcons />
			</div>
		</div>
	)
}

export default AboutView
