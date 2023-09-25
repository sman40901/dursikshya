
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";


const Signin = () => {
  const navigate = useNavigate();
  const { user } = isAuthenticated();
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectTo: false
  })
  const { email, password, error, redirectTo } = values;

  const handleChange = field => event => {
    setValues({ ...values, error: false, [field]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          authenticate(data, () => {
            setValues({ ...values, redirectTo: true })
          })
        }
      })
  }

  const redirectUser = () => {
    if (redirectTo) {
      if (user && user.role === 1) {
        return navigate('/admmin/dashboard');
      } else {
        return navigate('/profile');
      }
    }
  }

  // to show error message 
  const showError = () => (
    error && (
      <div className="alert alert-dander">{error}</div>
    )
  )

  return (
    <>
      {/* <Card/> */}

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <form>
              <h2 className="text-center mb-2">SignIn</h2>
              {showError()}
              {redirectUser()}
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input type='email' name="email" id="email" className="form-control"
                  onChange={handleChange('email')} value={email} />
              </div>
              <div className="mb-2">
                <label htmlFor="password">password</label>
                <input type='password' name="password" id="password" className="form-control"
                  onChange={handleChange('password')} value={password} />
              </div>
              <button className="btn btn-primary" onClick={handleSubmit}>SignIn</button>
            </form>
          </div></div></div>
    </>
  );
}

export default Signin;
