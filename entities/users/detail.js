import data from '../../data.json' assert {type: "json"};

let users = data.users

// populate detail
function populate() {
let detail = document.querySelector('.detail')

let index = getAllUrlParams().user
detail.innerHTML += `
    <h1 class="centerText" >${users[index].name}</h1>
    <h4>Age: ${users[index].age}</h4>
    <h4>Gender: ${users[index].gender}</h4>
    <h4>Email: ${users[index].email}</h4>
    <h4>Phone Number:${users[index].phone}</h4>
`

users[index].keyword.forEach(key => {
    document.querySelector('.keywords').innerHTML += `
        <span><i class="fa-solid fa-hashtag"></i>${key}</span>
`
})


}
populate()