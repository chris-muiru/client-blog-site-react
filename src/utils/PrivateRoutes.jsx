import { Route, Navigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContextProvider"

const PrivateRoutes = ({ children, ...rest }) => {
	let { user } = useAuthContext()
	return (
		<Route {...rest}>{!user ? <Navigate to="/signin" /> : children}</Route>
	)
}

export default PrivateRoutes
