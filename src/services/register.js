import { API_URL } from './settings'

function registerBuyer(body) {
    return fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        if (!res.ok) throw new Error(res.error);
        return true
    })
}

function registerArtist(body) {
    return fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        if (!res.ok) throw new Error(res.error);
        return true
    })
}

export {registerBuyer, registerArtist}