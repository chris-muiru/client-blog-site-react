import React from "react"
import { Link } from "react-router-dom"
const BlogHighlightView = ({ title, content }) => {
	// console.log(title)
	return (
			<Link to="/blog" className="w-full">
				<div className="bg-slate-100 text-slate-900 relative min-h-[204px] m-auto rounded-sm p-6 w-full">
					<h1 className="font-bold text-2xl text-yellow-600">{title}</h1>
					<p className="font-semibold">{content}</p>
					<small className="absolute bottom-0">by kris</small>
				</div>
			</Link>
	)
}

export default BlogHighlightView
