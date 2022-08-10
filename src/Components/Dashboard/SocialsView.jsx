import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faFacebook,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons"
import {
	faFaceLaughWink,
	faFaceSmileWink,
	faHand,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
const SocialsView = () => {
	return (
		<div
			className=" hidden  bg-slate-900
         w-1/4 h-96 mr-10 relative text-white  
         font-bold mt-4 pt-10 rounded-md lg:block"
		>
			<p className="text-center text-yellow-600">My socials</p>
			<p className="mx-10 pt-10 ">
				“A program is never less than 90% complete, and never more than 95%
				complete.”— Terry Baker, coder
			</p>
			<div className="absolute bottom-10 w-full">
				<div className="flex space-x-4 w-full justify-center">
					<div className="w-10 h-10">
						<Link to="">
							<FontAwesomeIcon
								icon={faGoogle}
								className="w-full h-full"
							/>
						</Link>
					</div>
					<div className="w-10 h-10">
						<Link to="">
							<FontAwesomeIcon
								icon={faGithub}
								className="w-full h-full"
							/>
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
		</div>
	)
}
export default SocialsView
