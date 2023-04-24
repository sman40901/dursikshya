import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "../config"

const EmailVerify = () => {
    const params = useParams();
    const [values, setValues] = useState({
        error: '',
        success: false
    })
    const { error, success } = values;

    // verify process
    useEffect(() => {
        const token = params.token;
        fetch(`${API}/confirmation/${token}`, {
            method: "POST",
            headers: {
                // if we are uploading image we cannot write this 
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({ ...values, error: '', success: true })
                }
            })
            .catch(err => console.log(err))
    }, [params.token])

    const showError = () => (
        <div className='alert alert-damage' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className='alert alert-success' style={{ display: success ? '' : 'none' }}>
            Your account is verified, login to continue
        </div>
    )

    return (
        <>
            {showError()}
            {showSuccess()}
        </>
    )
}

export default EmailVerify