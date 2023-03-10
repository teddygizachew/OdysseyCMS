import data from '../../data.json' assert {type: "json"};

let orgs = data.orgs
let orgs_list = document.querySelector('.orgs__list')
let org_index = 0
orgs.forEach((org, org_index) => {
    orgs_list.innerHTML += `
        <a class="card" href=detail.html?orgs=${org_index}>
            <h4>Name: ${org.name}</h4>
            <p>Founded: ${org.founded}</p>
            <p>Events: ${org.Events}</p>
        </a>
    `
});
