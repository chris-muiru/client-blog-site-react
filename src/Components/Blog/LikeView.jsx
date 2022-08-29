import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useRef } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContextProvider"
const LikeView = () => {
	const { blogId } = useParams()
	const [likes, setLikes] = useState()
	const [likedStatus, setLikedStatus] = useState()
	const likeStatusElementRef = useRef(null)

	const LikesUrl = `http://localhost:8000/blog/like/${blogId}/`
	const { getAuthToken } = useAuthContext()

	const fetchLikesByBlogId = async () => {
		let response = await fetch(LikesUrl, {
			method: "get",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		if (response.status === 200) {
			let { likes } = await response.json()
			setLikes(likes)
		}
	}
	const postLikeByBlogId = async () => {
		let response = await fetch(LikesUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let { is_liked } = await response.json()
		console.log(is_liked)
		setLikedStatus(is_liked)
	}
	if (likeStatusElementRef.current !== null) {
		if (likedStatus === true) {
			likeStatusElementRef.current.style.color = "green"
		} else {
			likeStatusElementRef.current.style.color = "white"
		}
	}

	useEffect(() => {
		fetchLikesByBlogId()
	}, [likedStatus])
	return (
		<div className="mt-5">
			<div className="text-white relative">
				<span className="font-bold">
					Like: &nbsp;
					<button onClick={postLikeByBlogId}>
						<FontAwesomeIcon
							icon={faThumbsUp}
							ref={likeStatusElementRef}
						/>
					</button>
				</span>
				<span className="absolute right-2 font-bold">{likes || 0}</span>
			</div>
		</div>
	)
}

export default LikeView
