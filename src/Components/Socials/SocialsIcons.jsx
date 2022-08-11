import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faFacebook,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-router-dom"
const SocialsIcons = () => {
	return (
		<div className="absolute bottom-10 w-full">
			<div className="flex space-x-4 w-full justify-center  text-white ">
				<div className="w-10 h-10">
					<Link to="">
						<FontAwesomeIcon icon={faGoogle} className="w-full h-full" />
					</Link>
				</div>
				<div className="w-10 h-10">
					<Link to="">
						<FontAwesomeIcon icon={faGithub} className="w-full h-full" />
					</Link>
				</div>
				<div className="w-10 h-10">
					<Link to="">
						<FontAwesomeIcon
							icon={faFacebook}
							className="w-full h-full"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SocialsIcons
