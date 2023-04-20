
import { API } from "../config";

// for signup
export const signup = user => {
    // this user data will come in from signup
    return fetch(`${API}/userpost`, {
        method: "POST",
        headers: {
            // if we are uploading image we cannot write this 
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}


// for signin
export const signin = user => {
    // this user data will come in from signup
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            // if we are uploading image we cannot write this 
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}