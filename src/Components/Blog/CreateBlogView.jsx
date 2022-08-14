import React from "react"
import NavBarView from "../Dashboard/NavBarView"

const CreateBlogView = () => {
	return (
		<div>
			<NavBarView />
			<div className="flex flex-col w-1/2 m-auto ">
				<form action="" class="flex  flex-col items-center space-y-4 mt-5">
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
