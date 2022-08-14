import { BrowserRouter } from "react-router-dom"
import AuthRoutes from "./routes/AuthRoutes"
import DashRoutes from "./routes/DashRoutes"
import "./dist/output.css"
import Main from "./Main"
function App() {
	return (
		<div className="bg-slate-800 min-h-screen">
			<BrowserRouter>
				<AuthRoutes />
				<DashRoutes />
				{/* <Main /> */}
			</BrowserRouter>
		</div>
	)
}

export default App
