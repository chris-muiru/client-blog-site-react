import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContextProvider"

const CommentGroupView = ({ commentsExist, blogId }) => {
	const BLOGURL = `http://localhost:8000/blog/comment/${blogId}/`
	const [comments, setComments] = useState("")
	const { getAuthToken, user } = useAuthContext()
	const fetchComments = async () => {
		let response = await fetch(BLOGURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		if (response.status === 200) {
			setComments([...(await response.json())].slice(0, 6))
		}
	}
	console.log(comments)
	const createComment = async (e) => {
		e.preventDefault()
		let response = await fetch(BLOGURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify({
				comment: e.target.comment.value,
			}),
		})
		if (response.status === 200) {
			window.location.reload()
		}
	}
	useEffect(() => {
		fetchComments()
	}, [])
	return (
		<div className="mx-2">
			<h2 className="font-bold py-5">Comments</h2>
			<div className="bg-slate-100">
				<div className="space-y-2">
					{comments &&
						comments.map(({ comment, user: creator }) => {
							if (user !== creator) {
								return (
									<div className="flex flex-row space-x-2 pb-10 clear-both">
										<p className="font-bold">{creator}</p>
										<p className="max-w-[400px] bg-slate-300 p-3 rounded-md ">
											{comment}
										</p>
									</div>
								)
							}
							return (
								<div className="flex flex-row space-x-2 float-right pb-6 clear-both">
									<p className="max-w-[400px] bg-green-400 p-3 rounded-md">
										{comment}
									</p>
									<p className="font-bold">me</p>
								</div>
							)
						})}
					{}
					<form
						className=" flex flex-col space-y-2 clear-both"
						method="POST"
						onSubmit={createComment}
					>
						<label htmlFor="comment">Add a comment</label>
						<input
							id="comment"
							name="comment"
							className="rounded-sm h-20 w-1/2 focus:outline-none border text"
							type="text"
						/>
						<div className="space-x-2 text-blue-700">
							<button
								type="submit"
								className="bg-blue-700 rounded-md p-4 w-32 text-white"
							>
								Submit
							</button>
							<button className="border border-blue-600 p-4 w-32">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CommentGroupView
