import React from "react"
import NavBarView from "./NavBarView"

const BlogView = () => {
	return (
		<div>
			<NavBarView />

			<div className="bg-slate-100 w-full min-h-[200px] container mt-20 m-auto rounded-md">
				<p className="text-center font-bold text-md text-yellow-600 pt-3">
					This is the heading
				</p>
				<div className="p-10 text-slate-900 font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
					dolor enim eos temporibus odit amet quia dolores voluptate.
					Fugiat, autem? Optio amet suscipit ipsa repellat non, neque
					commodi libero doloremque
				</div>
			</div>
		</div>
	)
}

export default BlogView
