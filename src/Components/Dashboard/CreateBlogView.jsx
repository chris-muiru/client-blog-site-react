import React from "react"
import NavBar from "./NavBarView"

const CreateBlogView = () => {
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
					className="pl-10 text-white w-full h-24 rounded-md bg-slate-700"
				/>
				<input
					type="text"
					placeholder="Genre"
					className="pl-10  text-white w-full h-24  rounded-md bg-slate-700"
				/>
				<textarea
					type="text"
					placeholder="Enter text here...."
					className="pl-10  text-white w-full h-64 rounded-md bg-slate-700"
				></textarea>
				<button
					type="submit"
					class="text-white bg-blue-600 w-40 p-4 rounded-md "
				>
					Create
				</button>
			</form>
		</div>
	)
}

export default CreateBlogView
