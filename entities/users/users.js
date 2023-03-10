import data from '../../data.json' assert {type: "json"};

let users = data.users
let users_list = document.querySelector('.users__list')
let user_index = 0

users.forEach((user, user_index) => {
    users_list.innerHTML += `
        <a class="card" href=detail.html?user=${user_index}>
            <h4>Name: ${user.name}</h4>
            <p>Age: ${user.age}</p>
        </a>
    `
});
