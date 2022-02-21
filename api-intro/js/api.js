function loadData() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}

// function displayUser(data) {
//     //  console.log(data)
//     const ul = document.getElementById('users');
//     for (const user of data) {
//         //  console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText = `name :${user.name} , email:${user.email}`;
//         ul.appendChild(li);
//     }
// }

function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `user name: ${user.name} ,             email:${user.email}`;
        ul.appendChild(li);
    }
}