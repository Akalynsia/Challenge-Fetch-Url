// Use fetch method to get the url.

const url = "https://jsonplaceholder.typicode.com/todos/1"
const getUserData = function() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

getUserData()