import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContextProvider"
import BlogHighlight from "./BlogHighlightView"
const URL = "http://localhost:8000/blog/"

const GroupBlogHighlightView = () => {
	const [blogs, setBlogs] = useState(null)
	const { getAuthToken } = useAuthContext()
	const fetchBlogs = async () => {
		const response = await fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		const dataJson = await response.json()
		setBlogs(dataJson)
	}
	useEffect(() => {
		fetchBlogs()
	}, [])
	console.log(blogs)
	return (
		<div className="flex m-auto  w-11/12 sm:w-7/12  flex-wrap space-y-10 mt-4">
			{blogs &&
				blogs.map(({ title, content, blogtype }) => {
					console.log(title)

					return (
						<BlogHighlight
							title={title}
							content={content}
							blogtype={blogtype}
						/>
					)
				})}
		</div>
	)
}

export default GroupBlogHighlightView
