import React, { createContext } from "react"
import { useContext } from "react"
import Cookies from "js-cookie"

const AuthContext = createContext()
export const useAuthContext = () => {
	// we will use this function to get access to context value in other components
	return useContext(AuthContext)
}
const AuthContextProvider = () => {
	const loginUser = async () => {
		let data = await fetch({
			
		})
	}
	return <AuthContext.Provider></AuthContext.Provider>
}

export default AuthContextProvider
