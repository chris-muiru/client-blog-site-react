export const loginUser = async (e) => {
	e.preventDefault()
	const URL = "http://localhost:8000/auth/login/"

	e.preventDefault()
	let response = await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: e.target.username.value,
			password: e.target.password.value,
		}),
	})
	if (response.status === 200) {
		let data = await response.json()
		console.log(data)
		// window.location = "/"
	}
}
