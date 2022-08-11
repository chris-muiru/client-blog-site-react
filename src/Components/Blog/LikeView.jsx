import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"

const LikeView = () => {
	return (
		<div className="mt-5">
			<div className="text-white relative">
				<span className="font-bold">
					Like: &nbsp;
					<Link to="">
						<FontAwesomeIcon icon={faThumbsUp} />
					</Link>
				</span>
				<span className="absolute right-2 font-bold">1000</span>
			</div>
		</div>
	)
}

export default LikeView
