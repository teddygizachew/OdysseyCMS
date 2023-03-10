import data from '../../data.json' assert {type: "json"};

let events = data.events

// populate detail
function populate() {
let detail = document.querySelector('.detail')

let page_index = getAllUrlParams().event
detail.innerHTML += `
    <h2 class="title_audiowide">${events[page_index].name}</h2>
    <div class="time">
        <span><i class="fa-solid fa-calendar-day"></i>${events[page_index].date}</span>
        <span><i class="fa-solid fa-clock"></i>${events[page_index].time}</span>
        <span class="location"><i class="fa-solid fa-location-dot"></i>${events[page_index].location}</span>
    </div>
    <p class="para">${events[page_index].description}</p>
    <div class="keywords"></div>
`

events[page_index].keyword.forEach(key => {
    document.querySelector('.keywords').innerHTML += `
        <span><i class="fa-solid fa-hashtag"></i>${key}</span>
`
})


}
populate()