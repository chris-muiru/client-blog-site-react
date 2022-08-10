import GroupBlogHighlightView from "./GroupBlogHighlightView"
import NavBarView from "./NavBarView"
import SideNavView from "./SideNavView"
import SocialsView from "./SocialsView"

const DashView = () => {
	return (
		<div className="">
			<NavBarView />
			<div className="flex">
				{/* <SideNavView /> */}
				<GroupBlogHighlightView />
				<SocialsView />
			</div>
		</div>
	)
}

export default DashView
