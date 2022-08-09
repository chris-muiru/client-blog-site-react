import React from "react"
import NavBar from "./NavBar"

const CreateBlog = () => {
	return (
		<div>
			<NavBar />
			<form
				action=""
				class="flex  flex-col items-center w-1/2 m-auto space-y-4 mt-10 "
			>
				<input
					type="text"
					placeholder="Title"
					className="w-full h-24 text-center rounded-md"
				/>
				<input
					type="text"
					placeholder="Genre"
					className="w-full h-24 text-center  rounded-md"
				/>
				<textarea
					type="text"
					placeholder="Enter text here...."
					className="w-full h-64 rounded-md"
				></textarea>
				<button type="submit" class="bg-blue-600 w-40 p-4 rounded-md">
					Create
				</button>
			</form>
		</div>
	)
}

export default CreateBlog
