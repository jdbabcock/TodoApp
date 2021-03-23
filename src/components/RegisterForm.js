import React, { Component } from "react";
import { Link } from "react-router-dom";

const LinkForm = {
  width: "40%",
};

class RegisterForm extends Component {
  render() {
    return (
      <section>
        <div className="box">
          <form className="FormContainer">
            <h1>Sign Up</h1>
            <h2>enter your info below</h2>
            <input type="email" placeholder="E-mail Address" required></input>
            <input type="password" placeholder="Password" required></input>
            <Link style={LinkForm} to="/">
              <button className="FormSubmit" type="submit">
                Register
              </button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default RegisterForm;
