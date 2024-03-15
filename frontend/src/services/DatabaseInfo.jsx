const defaultUrl = 'http://localhost:8800/';
export const getInfo = (url) =>
    fetch(defaultUrl + url)
        .then(response => response.json())
        .then(data =>{return data})
        .catch(error => console.error(error));

export const postInfo = (url, task) => fetch(defaultUrl + url, {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({task: task, completed: false})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

export const delInfo = (url, id) => fetch(defaultUrl + url, {
    method: 'DELETE',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({id: id})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

export const updateInfo = (url, id) => fetch(defaultUrl + url, {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({id: id})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))