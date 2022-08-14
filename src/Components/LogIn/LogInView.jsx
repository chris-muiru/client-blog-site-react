import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { loginUser } from "./loginLogic"
const LogIn = () => {
	return (
		<div className="bg-slate-900 min-h-screen">
			<h2 className="text-white text-3xl text-center font-bold pt-10">
				Sign In
			</h2>
			<div className="w-3/4 m-auto mt-10 lg:w-1/3 md:mt-20">
				<p className="text-white">Sign using options:</p>
				<div className="mt-10 grid grid-cols-2 gap-6 md:gap-23">
					<button className="bg-green-500 w-full h-20 rounded-md">
						<FontAwesomeIcon
							icon={faGoogle}
							className="text-white w-10 h-10 "
						/>
					</button>

					<button className=" bg-green-500 w-full h-20 rounded-md">
						<FontAwesomeIcon
							icon={faFacebook}
							className="text-white w-10 h-10"
						/>
					</button>
				</div>

				<div className="mt-20 relative">
					<form
						method="post"
						className="flex flex-col space-y-32"
						onSubmit={loginUser}
					>
						<div className="space-y-20">
							<input
								type="text"
								placeholder="Username"
								name="username"
								className="w-full rounded-md p-4"
							/>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="w-full rounded-md p-4"
							/>
						</div>

						<button className="w-full text-white bg-green-500 p-5 rounded-md">
							Log In
						</button>
					</form>
					<p className="text-white mt-5 md:mt-10 pb-10">
						Don't have account?&nbsp;
						<Link className="text-green-700 font-bold" to="/signUp">
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default LogIn
