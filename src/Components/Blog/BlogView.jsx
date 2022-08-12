import React from "react"
import NavBarView from "../Dashboard/NavBarView"
import CommentView from "./CommentView"
import LikeView from "./LikeView"

const BlogView = () => {
	return (
		<>
			<div className="w-3/4 relative  m-auto">
				<LikeView />
				<div className="bg-slate-100 min-h-[200px] mt-10 m-auto rounded-md">
					<p className="text-center font-bold text-md text-yellow-600 pt-3">
						This is the heading
					</p>
					<div className="p-10 text-slate-900 font-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Possimus dolor enim eos temporibus odit amet quia dolores
						voluptate. Fugiat, autem? Optio amet suscipit ipsa repellat
						non, neque commodi libero doloremque
					</div>
				</div>
				{/* <CommentView /> */}
			</div>
		</>
	)
}

export default BlogView
