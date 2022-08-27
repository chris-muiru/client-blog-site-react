import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContextProvider"
import NavBarView from "../Dashboard/NavBarView"
import CommentView from "./CommentView"
import LikeView from "./LikeView"

const BlogView = () => {
	let { getAuthToken } = useAuthContext()
	let { blogId } = useParams()
	let [blog, setBlog] = useState(null)
	let BlogUrl = `http://localhost:8000/blog/${blogId}`
	const fetchBlogById = async () => {
		let response = await fetch(BlogUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let dataJson = await response.json()
		setBlog([dataJson])
		console.log(dataJson)
	}
	console.log(blog)
	useEffect(() => {
		fetchBlogById()
	}, [])
	return (
		<>
			<NavBarView />
			<div className="w-11/12 sm:w-3/4 relative  m-auto">
				<LikeView />
				<div className="bg-slate-100 min-h-[200px] mt-10 m-auto rounded-md">
					{blog &&
						blog.map(({ title,content }) => {
							return (
								<div>
									<p className="text-center font-bold  text-yellow-600 pt-3">
										{title}
									</p>
									<div className="p-4 sm:p-10 text-slate-900 font-semibold">
										{content}
									</div>
								</div>
							)
						})}
				</div>
				{/* <CommentView /> */}
			</div>
		</>
	)
}

export default BlogView
