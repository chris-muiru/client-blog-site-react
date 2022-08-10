import React from "react"
import { Link } from "react-router-dom"
const BlogHighlightView = () => {
	return (
		<Link to="/blog">
			<div className="bg-slate-100 relative min-h-[204px] w-3/4 m-auto rounded-sm p-6">
				<h1 className="font-bold text-2xl text-yellow-600">The art of war</h1>
				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
					corrupti ducimus sequi laboriosam eum cupiditate possimus aliquid
					quaerat ad omnis expedita, rerum ipsam, distinctio deserunt
					recusandae ab reprehenderit accusantium enim!
				</p>
				<small className="absolute bottom-0">by kris</small>
			</div>
		</Link>
	)
}

export default BlogHighlightView
