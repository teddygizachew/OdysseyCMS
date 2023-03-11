import data from '../../data.json' assert {type: "json"};

let users = data.users

class Users{
    constructor(name, age, gender, email, phone ){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.email = email,
        this.phone = phone
    }
}

var form = document.querySelector("form");
    form.onsubmit = function(){
        event.preventDefault()
        let user_name = document.getElementById("name").value;
        alert(user_name);
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        let newUser = new Users(user_name, age, gender, email, phone);
        console.log(newUser);
        users.push(newUser);

    }

function read(){
    document.getElementById("newUser").submit();
}