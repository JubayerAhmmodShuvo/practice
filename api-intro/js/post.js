function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}
loadPosts();

// function displayPosts(posts) {
//     //   console.log(posts);
//     const postContainer = document.getElementById('posts');
//     for (const post of posts) {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h3>New Title</h3>
//         <p> New Descti<p/>`;
//         postContainer.appendChild(div);
//         console.log(post.title);
//     }

// }

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3>${ post.title} </h3><p> ${post.body}</p>`;
        postContainer.appendChild(div);
        console.log(post.title);
    }
}