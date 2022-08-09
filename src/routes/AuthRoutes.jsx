import React from "react"
import { Route, Routes } from "react-router-dom"
import LogIn from "../Components/LogIn/LogInView"
import SignUp from "../Components/LogIn/SignUp"

const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/signIn" element={<LogIn />} />
		</Routes>
	)
}

export default AuthRoutes
