
import React, { useState } from "react";
import { signup } from "../auth";

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  // destructuring
  const { name, email, password, error, success } = values;

  const handleChange = field => event => {
    setValues({ ...values, error: false, [field]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values })
    // sign up function
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, name: '', email: '', password: '', success: true });
        }
      })
  }

  // to show error message 
  const showError = () => (
    error && (
      <div className="alert alert-dander">{error}</div>
    )
  )

  // to show success message 
  const showSuccess = () => (
    success && (
      <div className="alert alert-success">New account created, verify your account before loging in</div>
    )
  )

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <form>
              <h2 className="text-center">Register</h2>
              {showError()}
              {showSuccess()}
              <div className="mb-2">
                <label htmlFor="name">FulllName</label>
                <input type="text" name="name" id="name" className="form-control"
                  onChange={handleChange('name')} value={name}></input>
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className="form-control"
                  onChange={handleChange('email')} value={email}></input>
              </div>
              <div className="mb-2">
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" className="form-control"
                  onChange={handleChange('password')} value={password}></input>
              </div>
              <div className="mb-2">
                <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
