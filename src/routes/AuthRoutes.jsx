import React from "react"
import { Route, Routes } from "react-router-dom"
import LogIn from "../Components/LogIn/LogInView"
import SignUpView from "../Components/LogIn/SignUpView"

const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/signUp" element={<SignUpView />} />
			<Route path="/signIn" element={<LogIn />} />
		</Routes>
	)
}

export default AuthRoutes
