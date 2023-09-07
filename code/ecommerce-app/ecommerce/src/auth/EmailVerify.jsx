import { API_URL } from '../config';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// sign up function
export const EmailVerify = user => {
    const params = useParams();
    const [values, setValues] = useState({
        error: '',
        success: false
    })

    const { error, success } = values;

    const token = params.token
    useEffect(() => {
        fetch(`${API_URL}/confirmation/${token}`, {
            method: 'PUT',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            }
        })
            .then(res => res.json)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({ ...values, success: true })
                }
            })
            .catch(err => console.log(err))
    }, [token])

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
            {showError}
            {showSuccess}
        </>
    )
}