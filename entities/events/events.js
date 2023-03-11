import data from '../../data.json' assert {type: "json"};

let events = data.events
let events_list = document.querySelector('.events__list')

let len = events.length
events.forEach((event, event_index) => {
    events_list.innerHTML += `
    <a class="card" href=CRUD/detail.html?event=${event_index}>
        <h4>${event.name}</h4>
    </a>
`
});

