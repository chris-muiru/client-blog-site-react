import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateBlog from "../Components/Dashboard/CreateBlogView"
import Dash from "../Components/Dashboard/DashView"
import BlogView from "../Components/Dashboard/BlogView"
const DashRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dash />} />
			<Route path="/new" element={<CreateBlog />} />
			<Route path="/blog" element={<BlogView />} />
		</Routes>
	)
}

export default DashRoutes
