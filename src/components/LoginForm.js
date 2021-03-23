import React, { Component } from "react";
import { Link } from "react-router-dom";

const TEST_USER = {
        email: "test@kenzie.academy",
        password: "test123",
}

const LinkForm = {
    width: "40%",
    };



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    this.setState({[name]: value});
  };


  handleLogin = () => {
    if (
      this.state.email === TEST_USER.email &&
      this.state.password === TEST_USER.password
    ) {
      alert("Succesfully logged in!");
      this.props.history.push("/Dashboard");
    } else {
      this.setState({ errorMessage: "Invalid Username/Password" });
    }
  };

    handleSubmit = (event) => {
        event.preventDefault();
    };
    
    
  render() {
    return (
      <section>
        <div className="box">
          <form className="FormContainer" onSubmit={this.handleLogin}>
            <h1>Login</h1>
            <h2>enter your info below</h2>
            <input
              type="email"
              placeholder="E-mail Address"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              required
            />
            <Link style={LinkForm} to="/Dashboard">
              <button className="FormSubmit" type="submit">
                Login
              </button>
            </Link>
            <h3>Dont have a account?</h3>
            <Link to="/SignUp">
              <button className="register">Register here</button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}



export default LoginForm;



