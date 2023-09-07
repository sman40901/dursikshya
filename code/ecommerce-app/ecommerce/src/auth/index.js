import { API_URL } from '../config';

// sign up function
export const signup = user => {
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',

        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
}


// sign up function
export const signin = user => {
    return fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',

        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
}

export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    }
    else {
        return false;
    }
}