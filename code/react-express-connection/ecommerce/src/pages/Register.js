import React, { useState } from 'react';
import { signup } from '../auth';

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });
    // object destructuring
    // is equivalent to const name=values.name
    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        // name is a parameter, event is event handling value 
        setValues({
            ...values,
            error: false,
            // since this is an object and we need to only set value of name
            [name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // name is a parameter, event is event handling value 
        setValues({ ...values });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    // after submitting the form the values must be cleared
                    setValues({ ...values, name: '', email: '', password: '', success: true })
                }
            })
            .catch(error)
    }

    const showError = () => (
        <div className='alert alert-damage' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className='alert alert-success' style={{ display: success ? '' : 'none' }}>
            New account created, verify your account before login
        </div>
    )

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-lg-5 my-4">
                    <form className="p-3 shadow-lg">
                        <h2 className="text-center text-success my-2">
                            Register Form
                        </h2>
                        {showError()}
                        {showSuccess()}
                        <div className="mb-3">
                            <label htmlFor="fname">FullName</label>
                            <input type="text" id="fname" className="form-control"
                                onChange={handleChange('name')} value={name} />
                            {/* to read the value that comes inside handleChange */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control"
                                onChange={handleChange('email')} value={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass">Password</label>
                            <input type="password" id="pass" className="form-control"
                                onChange={handleChange('password')} value={password} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpass">Confirm Password</label>
                            <input type="password" id="cpass" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary"
                                onClick={handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register