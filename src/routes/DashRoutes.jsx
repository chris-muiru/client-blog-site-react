import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateBlog from "../Components/Dashboard/CreateBlog"
import Dash from "../Components/Dashboard/Dash"

const DashRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dash />} />
			<Route path="/new" element={<CreateBlog />} />
		</Routes>
	)
}

export default DashRoutes
