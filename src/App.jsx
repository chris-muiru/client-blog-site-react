import { BrowserRouter } from "react-router-dom"
import AuthRoutes from "./routes/AuthRoutes"
import DashRoutes from "./routes/DashRoutes"
import "./dist/output.css"
function App() {
	return (
		<div className="bg-slate-800 min-h-screen">
			<BrowserRouter>
				<AuthRoutes />
				<DashRoutes />
			</BrowserRouter>
		</div>
	)
}

export default App
