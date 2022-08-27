import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateBlog from "../Components/Blog/CreateBlogView"
import Dash from "../Components/Dashboard/DashView"
import BlogView from "../Components/Blog/BlogView"
import AboutView from "../Components/About/AboutView"
import ServiceView from "../Components/About/ServiceView"
import ContactView from "../Components/About/ContactView"
import PrivateRoutes from "../utils/PrivateRoutes"
const DashRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dash />} />
			<Route path="/new" element={<CreateBlog />} />
			<Route path="/blog/:blogId" element={<BlogView />} />
			<Route path="/about" element={<AboutView />} />
			<Route path="/service" element={<ServiceView />} />
			<Route path="/contact" element={<ContactView />} />
		</Routes>
	)
}

export default DashRoutes
