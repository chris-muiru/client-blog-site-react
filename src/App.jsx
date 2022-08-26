import { BrowserRouter } from "react-router-dom"
import AuthRoutes from "./routes/AuthRoutes"
import DashRoutes from "./routes/DashRoutes"
import "./dist/output.css"
import AuthContextProvider from "./context/AuthContextProvider"
function App() {
	return (
		<div className="bg-slate-800 min-h-screen">
			<BrowserRouter>
				<AuthContextProvider>
					<AuthRoutes />
					<DashRoutes />
				</AuthContextProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
