import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

function Login({ setLoggedIn }) {
  const initFormState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(initFormState);

  const navigate = useNavigate();

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:9293/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user);
        if (user.error) {
          alert(user.error);
        } else {
          setLoggedIn(user);
          setFormState(initFormState);
          localStorage.setItem("user", user);
          console.log(user);
          navigate("/home");
        }
      });
  };

  return (
    <div class="login-box">
      <h2>
        <b>Login</b>
      </h2>
      <br></br>
      <h3>
        <b>Welcome to Devspedia</b>
      </h3>
      <br></br>
      <h4>
        {" "}
        <i>Login to explore developer articles </i>
      </h4>
      <br></br>
      <form className="formWrapper" onSubmit={handleSubmit} autoComplete="off">
        <div class="user-box">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={formChange}
            required
          />
        </div>
        <br></br>
        <div class="user-box">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={formChange}
            required
          />
        </div>
        <br></br>
        <div class="button-form">
          <button id="formBtn" type="submit">
            LOGIN
          </button>
          </div>
          <div>
          <div class="register">
            <p className="signup">
              <h5>Don't have an account?</h5>
              <a id="signupLink" href="/users/new">
                Register
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
