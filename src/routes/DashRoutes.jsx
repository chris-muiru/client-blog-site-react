import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateBlog from "../Components/Blog/CreateBlogView"
import Dash from "../Components/Dashboard/DashView"
import BlogView from "../Components/Blog/BlogView"
import AboutView from "../Components/About/AboutView"
const DashRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dash />} />
			<Route path="/new" element={<CreateBlog />} />
			<Route path="/blog" element={<BlogView />} />
			<Route path="/about" element={<AboutView/>} />
		</Routes>
	)
}

export default DashRoutes
