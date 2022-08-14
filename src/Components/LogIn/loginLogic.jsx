export const loginUser = async (e) => {
	e.preventDefault()
	const URL = "http://localhost:8000/login"
	const response = await fetch(URL, {
		method: "POST",
		mode: "cors",
		headers: {
			"Context-Type": "application/json",
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
