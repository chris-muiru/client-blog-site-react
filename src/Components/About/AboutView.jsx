import React from "react"
import NavBarView from "../Dashboard/NavBarView"
import SharedView from "./SharedView"

const AboutView = () => {
	return (
		<>
			<NavBarView />
			<SharedView heading="What we do">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
				asperiores quisquam labore unde voluptatem velit quo enim ullam,
				dolor nostrum laboriosam voluptates amet reiciendis expedita
				veritatis voluptatum sint ea cum.
			</SharedView>
		</>
	)
}

export default AboutView
