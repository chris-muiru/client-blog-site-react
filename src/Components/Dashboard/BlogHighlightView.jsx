import React from "react"
import { Link } from "react-router-dom"
const BlogHighlightView = ({
	title,
	content,
	blogId,
	createdAt,
	writterName,
}) => {
	let date = new Date(createdAt)
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]
	return (
		<Link to={`/blog/${blogId}`} className="w-full">
			<div className="bg-slate-100 text-slate-900 relative min-h-[204px] m-auto rounded-sm p-6 w-full">
				<h1 className="font-bold text-2xl text-yellow-600">{title}</h1>
				<small className="absolute right-0 top-7 text-green-700">{`
				${date.getDate()} 
				${months[date.getMonth()]}, ${date.getFullYear()}`}</small>
				<p className="font-semibold text-justify">
					{content.substr(0, 800)}...
				</p>
				<p className="absolute font-bold bottom-0 text-green-700">
					by {writterName}
				</p>
			</div>
		</Link>
	)
}

export default BlogHighlightView
