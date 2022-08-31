import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContextProvider"
import logo from "./../../logo/transparent-eagle-slinger.svg"
import SideNavView from "./SideNavView"
const NavBarView = () => {
	const { getAuthToken, user, logOut } = useAuthContext()

	const [isPermitted, setIsPermitted] = useState(false)
	const canCreateBlog = async () => {
		let response = await fetch("http://localhost:8000/blog/isPermitted/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		if (response.status === 200) {
			let dataJson = await response.json()
			setIsPermitted(dataJson)
		} else {
			setIsPermitted(false)
		}
	}
	const displayBlogButtonIfTrue = (status) => {
		if (status === true) {
			return [
				<div className="flex md:order-2">
					<Link to="/new">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600"
						>
							Create Blog
						</button>
					</Link>
				</div>,
			]
		} else {
			return []
		}
	}
	useEffect(() => {
		canCreateBlog()
	})
	return (
		<div className="bg-gray-900 min-h-[100px]">
			<nav className="px-2 py-2.5 sm:px-4">
				<div className="container flex flex-wrap justify-between items-center mx-auto relative">
					<button className="inline-flex items-center p-2 text-blue-500 md:hidden">
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div className="relative w-40">
						<img
							src={logo}
							className="h-24 inline-block"
							alt="slinger logo"
						/>
						<span className=" absolute top-9 left-20  text-xl font-semibold text-white">
							{user}
						</span>
					</div>
					{displayBlogButtonIfTrue(isPermitted)}

					<div
						className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
						id="navbar-cta"
					>
						<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="#"
									className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
								>
									<Link to="/">Home</Link>
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/service"
									className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Service
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Contact
								</Link>
							</li>
							<li className="text-green-500">
								<button onClick={logOut}>
									logOut &nbsp; &nbsp;
									<FontAwesomeIcon icon={faSignOut} />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBarView
