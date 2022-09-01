import Markdown from "marked-react"
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
			<div className="p-4 bg-slate-100 text-slate-900 relative h-56 overflow-hidden m-auto rounded-md w-full ">
				<h1 className="font-bold text-2xl text-yellow-600">{title}</h1>
				<small className="absolute right-0 top-7 text-bold text-green-700">{`
				${date.getDate()} 
				${months[date.getMonth()]}, ${date.getFullYear()}`}</small>
				<p className="font-semibold text-justify whitespace-pre-line pr-14 ">
					<Markdown>{content}</Markdown>
				</p>
				<p className="absolute font-bold bottom-0 right-0  text-green-700 pt-10">
					by {writterName}
				</p>
			</div>
		</Link>
	)
}

export default BlogHighlightView
