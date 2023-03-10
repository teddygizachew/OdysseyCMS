import data from '../../data.json' assert {type: "json"};

let events = data.events
let events_list = document.querySelector('.events__list')
let event_index = 0
events.forEach((event, event_index) => {
    events_list.innerHTML += `
        <a class="card" href=detail.html?events=${event_index}>
            <h4>Event: ${event.name}</h4>
            <p>Location: ${event.location}</p>
        </a>
    `
});
