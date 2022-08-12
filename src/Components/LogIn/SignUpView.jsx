import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
const SignUp = () => {
	return (
		<div className="bg-slate-900 pt-10 min-h-screen">
			<h2 className="text-white text-3xl text-center font-bold mt-6">
				Sign Up
			</h2>
			<div className="w-3/4 m-auto mt-10  lg:w-1/3 md:mt-10">
				<p className="text-white">Sign up using options:</p>
				<div className="mt-10 grid grid-cols-2 gap-6 md:gap-22">
					<div className="relative bg-green-500 w-full h-20 rounded-md">
						<FontAwesomeIcon
							icon={faGoogle}
							className="text-white w-10 h-20 absolute top-1/2 left-1/2 -mt-10 -ml-10"
						/>
					</div>

					<div className="relative bg-green-500 w-full h-20 rounded-md">
						<FontAwesomeIcon
							icon={faFacebook}
							className="text-white w-10 h-20 absolute top-1/2 left-1/2 -mt-10 -ml-10"
						/>
					</div>
				</div>

				<div className="mt-20 relative">
					<form action="" className="flex flex-col space-y-20">
						<div className="space-y-20">
							<input
								type="text"
								placeholder="Username"
								className="w-full rounded-md p-4"
							/>
							<input
								type="text"
								placeholder="Email"
								className="w-full rounded-md p-4"
							/>
							<input
								type="password"
								placeholder="Password"
								className="w-full rounded-md p-4"
							/>
							{/* <input
								type="password"
								placeholder="Confirm password"
								className="w-full rounded-md p-4"
							/> */}
						</div>

						<button className="w-full text-white bg-green-600 p-5 rounded-md">
							Log In
						</button>
					</form>
					<p className="text-white mt-5 md:mt-10 pb-20">
						Already have account?&nbsp;
						<Link className="text-green-700 font-bold" to="/signIn">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SignUp
