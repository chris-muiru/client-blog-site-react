import GroupBlogHighlightView from "./GroupBlogHighlightView"
import NavBarView from "./NavBarView"
import SideNavView from "./SideNavView"
import SocialsView from "../Socials/SocialsView"

const DashView = () => {
	return (
		<div className="">
			<div className="flex">
				{/* <SideNavView /> */}
				<GroupBlogHighlightView />
				<SocialsView />
			</div>
		</div>
	)
}

export default DashView
