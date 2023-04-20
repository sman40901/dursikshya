
import React from "react";

const ForgotPassword = () => {
  return (
    <>
           <div className="d-flex justify-content-center">
                <div className="col-lg-5 my-4">
                    <form className="p-3 shadow-lg">
                        <h2 className="text-center text-success my-2">
                            Login Form
                        </h2>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
                     

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send reset password link</button>
                        </div>
                       
                    </form>
                </div>
            </div>

    </>
  );
}

export default ForgotPassword;
