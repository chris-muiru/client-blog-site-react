import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import SharedView from "./SharedView"

const ContactView = () => {
	return (
		<>
			<SharedView heading="Contacts">
				<div className="flex flex-col space-y-7">
					<div>
						<FontAwesomeIcon icon={faPhone} /> &nbsp; 0712345678
					</div>
					<div>
						<FontAwesomeIcon icon={faMailBulk} /> &nbsp; slinger@gmail.com
					</div>
				</div>
			</SharedView>
		</>
	)
}

export default ContactView
