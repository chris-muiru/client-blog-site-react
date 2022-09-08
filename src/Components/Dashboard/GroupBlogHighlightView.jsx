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
	return (
		<div className="flex m-auto  w-11/12 xl:w-7/12 flex-col space-y-10 mt-4 mb-10">
			{blogs &&
				blogs.map(
					({ title, content, blogType, id, createdAt, writterName }) => {
						return (
							<BlogHighlight
								title={title}
								content={content}
								blogType={blogType}
								blogId={id}
								createdAt={createdAt}
								writterName={writterName}
							/>
						)
					}
				)}
		</div>
	)
}

export default GroupBlogHighlightView
