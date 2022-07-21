import { BrowserRouter } from "react-router-dom"
import LogIn from "./Components/LogIn/LogInView"
import SignUp from "./Components/LogIn/SignUp"
import "./dist/output.css"
function App() {
	return (
		<>
			<BrowserRouter>
				<LogIn />
				{/* <SignUp /> */}
			</BrowserRouter>
		</>
	)
}

export default App
