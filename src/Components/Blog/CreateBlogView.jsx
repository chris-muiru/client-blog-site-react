import React, { useEffect } from "react"
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContextProvider"
import NavBarView from "../Dashboard/NavBarView"
const CreateBlogView = () => {
	const { getAuthToken } = useAuthContext()
	const [blogType, setBlogType] = useState("")
	const blogUrl = `http://localhost:8000/blog/`
	const createBlog = async (e) => {
		e.preventDefault()
		let response = await fetch(blogUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify({
				title: e.target.title.value,
				blogType: e.target.blogType.value,
				content: e.target.content.value,
			}),
		})
		let dataJson = await response.json()
		console.log(dataJson)
		window.location = "/"
	}

	const getBlogType = async () => {
		const getBlogUrl = "http://localhost:8000/blog/type/"
		const response = await fetch(getBlogUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		setBlogType(await response.json())
	}

	const displayBlogTypeOptions = () => {
		return (
			blogType &&
			blogType.map(([value, display]) => {
				return <option value={value}>{display}</option>
			})
		)
	}
	useEffect(() => {
		createBlog()
		getBlogType()
	}, [])
	return (
		<div>
			<NavBarView disableCreateBlogButton={true} />
			<div className="flex flex-col m-4 sm:w-1/2 sm:m-auto ">
				<form
					method="post"
					onSubmit={createBlog}
					class="flex  flex-col items-center space-y-4 mt-5"
				>
					<input
						name="title"
						type="text"
						placeholder="Title"
						className="pl-10 text-white w-full h-24 rounded-md bg-slate-700"
					/>

					<select
						className="pl-10  text-white w-full h-24  rounded-md bg-slate-700"
						name="blogType"
					>
						{displayBlogTypeOptions()}
					</select>
					<textarea
						name="content"
						type="text"
						placeholder="Enter text here...."
						className="pl-10  text-white w-full min-h-[400px] rounded-md bg-slate-700"
					></textarea>
					<button
						type="submit"
						class="text-white bg-blue-600 w-40 p-4 rounded-md "
					>
						Create
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateBlogView
