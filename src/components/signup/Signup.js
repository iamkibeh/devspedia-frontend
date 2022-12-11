import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup({ addNewUser }) {
	// const initFormState = {
	//   fname: '',
	//   lname: '',
	//   username: '',
	//   email: '',
	//   password: '',
	// }
	const [formState, setFormState] = useState({});
	const navigate = useNavigate();
	const myRouteLocation = window.location.pathname;

	// const [passConfirmation, setPassConfirmation] = useState({
	//   passwordConfirm: '',
	// })

	// const formChange = (e) => {
	//   const { name, value } = e.target
	//   setFormState((prevState) => ({ ...prevState, [name]: value }))
	// }

	// const passwordConfChange = (e) => {
	//   const { name, value } = e.target
	//   setPassConfirmation((prevState) => ({ ...prevState, [name]: value }))
	// }

	function formChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormState({ ...formState, [name]: value });
	}

	console.log(formState);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
		fetch("https://devspedia-api-production.up.railway.app/signup", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				username: formState.username,
				email: formState.email,
				password: formState.password,
				password_confirmation: formState.password_confirmation,
			}),
		})
			.then((r) => r.json())
			.then((data) => console.log(data));

		// if (true) {
		//   alert('Passwords do not match! Please try again.')
		// } else {
		//   await fetch('http://localhost:9293/users', {
		//     method: 'POST',
		//     headers: {
		//       'Content-Type': 'application/json',
		//     },
		//     body: JSON.stringify(formState),
		//   })
		//     .then((resp) => resp.json())
		//     .then((newUser) => {
		//       addNewUser(newUser)
		//       // setFormState(initFormState)
		//       navigate('/')
		//     })
		// }
	}

	return (
		<>
			<div className="parent-container-signup">
				<div className="login-box">
					<h3>Signup</h3>
					<h4>Welcome to Devspedia</h4>
					<p>Signup to get unlimited access to articles</p>
					<div className="devs-login-form">
						<form onSubmit={handleSubmit} autoComplete="off">
							<div className="login-inputs-container">
								{/* <input
                  id='firstname'
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  value={formState.firstname}
                  onChange={(e)=>formChange()}
                  required
                /> */}
								{/* <input
                  id='lastname'
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  value={formState.lastname}
                  onChange={formChange}
                  required
                /> */}
								<input
									id="fname"
									type="text"
									name="fname"
									placeholder="First Name"
									// value={formState.fname}
									onChange={(e) => formChange(e)}
									required
								/>
								<input
									id="lname"
									type="text"
									name="lname"
									placeholder="Last Name"
									// value={formState.lname}
									onChange={(e) => formChange(e)}
									required
								/>
								<input
									id="username"
									type="text"
									name="username"
									placeholder="Username"
									// value={formState.username}
									onChange={(e) => formChange(e)}
									required
								/>
								<input
									id="email"
									type="email"
									name="email"
									placeholder="Email address"
									// value={formState.email}
									onChange={(e) => formChange(e)}
									required
								/>
								<input
									id="password"
									type="password"
									name="password"
									placeholder="Password"
									// value={formState.password}
									onChange={(e) => formChange(e)}
									required
								/>
								<input
									id="passwordConfirm"
									type="password"
									name="password_confirmation"
									placeholder="Confirm password"
									// value={passConfirmation.passwordConfirm}
									onChange={(e) => formChange(e)}
									required
								/>
							</div>

							<div className="logins-button-form">
								<button onClick={() => navigate("/login")}>Signup</button>
							</div>
						</form>
					</div>
					<div className="login-footer">
						<div className="register">
							<p>
								Have an account?
								<span>
									<Link
										to={
											myRouteLocation !== "/dev/signup"
												? "/login"
												: "/dev/login"
										}
									>
										Login
									</Link>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;
