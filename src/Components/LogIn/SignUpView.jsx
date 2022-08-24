import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useRef } from "react"
import { useState } from "react"
const SignUp = () => {
	const checkExistDiv = useRef(null)
	const [msgStatus, setMsgStatus] = useState()
	const signUp = async (e) => {
		const URL = "http://localhost:8000/auth/signup/"

		e.preventDefault()
		let response = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
			body: JSON.stringify({
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
				passwordConfirm: e.target.passwordConfirm.value,
			}),
		})
		let { msg } = await response.json()
		if (msg === "user exists") {
			setMsgStatus("User exists!")
			checkExistDiv.current.style.visibility = "visible"
		} else if (msg === "user created") {
			window.location = "/signin"
		} else if (msg === "incorrect password") {
			setMsgStatus("passwords don't match")
			checkExistDiv.current.style.visibility = "visible"
		} else {
			setMsgStatus("Invalid")
			checkExistDiv.current.style.visibility = "visible"
		}
	}

	return (
		<div className="bg-slate-900 pt-5 min-h-screen">
			<h2 className="text-white text-3xl text-center font-bold">Sign Up</h2>

			<div className="w-3/4 m-auto  lg:w-1/3 md:mt-1 ">
				<div
					ref={checkExistDiv}
					className="bg-red-600 p-4 rounded-md mb-4 text-center text-white invisible"
				>
					{msgStatus}
				</div>
				<p className="text-white">Sign up using options:</p>
				<div className="mt-5 grid grid-cols-2 gap-6 md:gap-32">
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

				<div className=" mt-10 sm:mt-20 relative">
					<form
						method="post"
						onSubmit={signUp}
						className="flex flex-col space-y-14"
					>
						<div className="space-y-14">
							<input
								type="text"
								placeholder="Username"
								name="username"
								className="w-full rounded-md p-3"
							/>
							<input
								type="text"
								placeholder="Email"
								name="email"
								className="w-full rounded-md p-3"
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								className="w-full rounded-md p-3"
							/>
							<input
								type="password"
								name="passwordConfirm"
								placeholder="Confirm password"
								className="w-full rounded-md p-3"
							/>
						</div>

						<button
							onClick={() => {}}
							className="w-full text-white bg-green-600 p-5 rounded-md text-bold"
						>
							Sign up
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
