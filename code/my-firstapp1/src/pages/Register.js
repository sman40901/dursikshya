import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // all function import

const Register = () => {
  return (
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(20, "must be 20 chars of less")
          .required('Firstname is mandatory'),

        lastname: Yup.string()
          .max(20, "must be 20 chars of less")
          .required('Lastname is mandatory'),

        email: Yup.string()
          .email("Invalid email address")
          .required('Email is mandatory'),

        password: Yup.string()
          // .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!_-+=])[A-Za-z\d@#$%^&*!_-+=]{8,}$/,"password is not valid")
          .required('password is mandatory'),

        cpassword: Yup.string()
          // .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!_-+=])[A-Za-z\d@#$%^&*!_-+=]{8,}$/,"password is not valid")
          .required('password is mandatory')
          .oneOf([Yup.ref('password'), null], "password does not match")

      })}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <dic className="col-md-4 shadow p-3">
            {/* <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label for="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form> */}
            <Form>
              <div className="mb-3">
                <label htmlFor="firstname">FirstName</label>
                <Field type='text' id='firstname' name='firstname' className='form-control'></Field>
                <ErrorMessage name='firstname'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="lastname">LastName</label>
                <Field type='text' id='lastname' name='lastname' className='form-control'></Field>
                <ErrorMessage name='lastname'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Field type='email' id='email' name='email' className='form-control'></Field>
                <ErrorMessage name='email'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <Field type='password' id='password' name='password' className='form-control'></Field>
                <ErrorMessage name='password'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword">Confirm password</label>
                <Field type='password' id='cpassword' name='cpassword' className='form-control'></Field>
                <ErrorMessage name='cpassword'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-2">
                <button className="btn btn-primary">Register</button>
              </div>
            </Form>
          </dic>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
