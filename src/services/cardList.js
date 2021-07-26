// use with MongoDB
export function getCardList() {
    return fetch('https://trading-card-app-heroku.herokuapp.com/')
    .then(data => data.json())
}

export function getCurrentCard(id) {
    return fetch(`https://trading-card-app-heroku.herokuapp.com/${id}`)
    .then(data => data.json())
}

export function addCard(name, url, description) {
    return fetch('https://trading-card-app-heroku.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, url, description })
    })
        .then(data => data.json())
}

export function updateCardName(name, id) {
    return fetch(`https://trading-card-app-heroku.herokuapp.com/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })
        .then(data => data.json())
}

export function deleteCard(id) {
    return fetch(`https://trading-card-app-heroku.herokuapp.com/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}