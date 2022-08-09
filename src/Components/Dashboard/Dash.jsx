import BlogGroup from "./BlogGroup"
import NavBar from "./NavBar"
import SideNav from "./SideNav"

const Dash = () => {
	return (
		<div className="">
			<NavBar />
			<div className="flex">
				{/* <SideNav /> */}
				<BlogGroup />
			</div>
		</div>
	)
}

export default Dash
