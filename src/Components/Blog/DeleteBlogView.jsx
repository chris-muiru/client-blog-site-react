import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContextProvider"

const DeleteBlogView = () => {
	const { blogId } = useParams()
	console.log(blogId)
	const { getAuthToken } = useAuthContext()
	const deleteBlogById = async (blogId) => {
		let URL = `http://localhost:8000/blog/${blogId}/`
		let response = await fetch(URL, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		if (response.status === 200) {
			window.location = "/"
		}
	}

	return (
		<div className="absolute top-3 left-10">
			<button onClick={() => deleteBlogById(blogId)}>
				<FontAwesomeIcon icon={faTrash} className="text-green-700" />
			</button>
		</div>
	)
}

export default DeleteBlogView
