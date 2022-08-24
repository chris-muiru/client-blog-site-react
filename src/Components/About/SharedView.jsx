import React from "react"
import SocialsIcons from "../Socials/SocialsIcons"

const SharedView = ({ heading, children }) => {
	return (
		<div>
			<div className="rounded-md bg-white min-h-[200px] font-semibold w-11/12 sm:w-3/4 container m-auto pt-3 mt-14">
				<p className="text-yellow-600 font-bold text-center">{heading}</p>

				<div className="p-10 text-slate-900 font-semibold">{children}</div>
			</div>
			<div>
				<SocialsIcons />
			</div>
		</div>
	)
}

export default SharedView
