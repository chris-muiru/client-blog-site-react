import React, { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
const AuthContext = createContext()

const BASE = "http://localhost:8000"

export function useAuthContext() {
	// we will use this function to get access to context value in other components
	return useContext(AuthContext)
}
const AuthContextProvider = ({ children }) => {
	// stay logged in even after page refresh
	const [user, setUser] = useState(() =>
		localStorage.getItem("blogAuthTokens")
			? jwtDecode(localStorage.getItem("blogAuthTokens"))
			: null
	)
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("blogAuthTokens")
			? JSON.parse(localStorage.getItem("blogAuthTokens"))
			: null
	)

	let loginUser = async (e) => {
		e.preventDefault()
		const response = await fetch(`${BASE}/api/token/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		})
		const dataJson = await response.json()
		if (response.status === 200) {
			setAuthTokens(dataJson)
			setUser(jwtDecode(dataJson.access))
			localStorage.setItem("blogAuthTokens", JSON.stringify(dataJson))
			window.location = "/"
		} else {
			alert("something went wrong")
		}
	}
	let logOut = () => {
		setAuthTokens(null)
		setUser(null)
		localStorage.removeItem("authTokens")
		window.location = "/login"
	}

	let refreshToken = async (token) => {
		let response = await fetch(`${BASE}/api/token/refresh/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				refresh: token,
			}),
		})
		let dataJson = await response.json()
		if (response.status === 200) {
			setAuthTokens(dataJson)
			setUser(jwtDecode(dataJson.access))
			localStorage.setItem("blogAuthTokens", JSON.stringify(dataJson))
		} else {
			window.location = "/signin"
		}
	}

	const getAuthToken = () => {
		if (jwtDecode(authTokens.access).exp < Date.now() / 1000) {
			localStorage.clear()
			window.location = "/signin"
		}
		return authTokens.access
	}
	console.log(authTokens)
	let context = {
		user: user,
		loginUser,
		logOut: logOut,
		getAuthToken: getAuthToken,
	}
// 	useEffect(() => {
// 		let interval = setInterval(() => {
// 			if (authTokens) {
// 				refreshToken()
// 			}
// 		}, 240000)
// 
// 		// cleanup
// 		return () => {
// 			clearInterval(interval)
// 		}
// 	}, [authTokens])
	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	)
}
export default AuthContextProvider
