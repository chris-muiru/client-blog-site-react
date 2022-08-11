import React from "react"
import SocialsIcons from "./SocialsIcons"

const SocialsView = () => {
	return (
		<div
			className=" hidden  bg-slate-900
         w-1/4 h-96 mr-10 relative 
         font-bold mt-4 pt-10 rounded-md lg:block"
		>
			<p className="text-center text-yellow-600">My socials</p>
			<p className="mx-10 pt-10 text-white">
				“A program is never less than 90% complete, and never more than 95%
				complete.”— Terry Baker, coder
			</p>
			<SocialsIcons />
		</div>
	)
}
export default SocialsView
