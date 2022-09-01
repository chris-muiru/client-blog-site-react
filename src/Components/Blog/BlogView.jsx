import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContextProvider"
import NavBarView from "../Dashboard/NavBarView"
import Markdown from "marked-react"
import CommentView from "./CommentView"
import DeleteBlogView from "./DeleteBlogView"
import LikeView from "./LikeView"
const BlogView = () => {
	let { getAuthToken } = useAuthContext()
	const [isBlogOwner, setIsBlogOwner] = useState(false)
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
	}
	const displayDeleteBtnIfTrue = (status) => {
		if (status) {
			return <DeleteBlogView />
		}
		return ""
	}
	const getBlogOwner = async (blogId) => {
		let response = await fetch(
			`http://localhost:8000/blog/isPermitted/${blogId}/`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthToken()}`,
				},
			}
		)
		if (response.status === 200) {
			let dataJson = await response.json()
			setIsBlogOwner(dataJson)
		} else {
			setIsBlogOwner(false)
		}
	}

	useEffect(() => {
		fetchBlogById()
		getBlogOwner(blogId)
	}, [])
	return (
		<>
			<NavBarView />
			<div className="w-11/12 sm:w-3/4 relative  m-auto">
				<LikeView />
				<div>
					<div className="bg-slate-100 min-h-[200px] mt-10 m-auto rounded-md">
						{blog &&
							blog.map(({ title, content, createdAt }) => {
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
									<div className="relative ">
										{displayDeleteBtnIfTrue(isBlogOwner)}
										<p className="text-center font-bold  text-yellow-600 pt-3">
											{title}
										</p>
										<small className="absolute right-0 sm:right-10 top-3 text-green-700">
											{`
										${date.getDate()} 
										${months[date.getMonth()]}, ${date.getFullYear()}`}
										</small>
										<div className="p-4 sm:p-10 text-slate-900 font-semibold text-justify whitespace-pre-line overflow-auto">
											<Markdown>{content}</Markdown>
										</div>
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogView
