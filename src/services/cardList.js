// use with MongoDB
export function getCardList() {
    return fetch('http://localhost:3000/')
    .then(data => data.json())
}

export function getCurrentCard(id) {
    return fetch(`http://localhost:3000/${id}`)
    .then(data => data.json())
}

export function addCard(name, url, description) {
    return fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, url, description })
    })
        .then(data => data.json())
}

export function updateCardName(name, id) {
    return fetch(`http://localhost:3000/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })
        .then(data => data.json())
}

export function deleteCard(id) {
    return fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}