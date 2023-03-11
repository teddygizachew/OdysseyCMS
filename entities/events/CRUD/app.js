const events={
	documentID:'1083937811262095360',
	index:function(){
		let events_list = document.querySelector('.events__list')
		events_list.innerHTML='<div class="card">Loading quotes, please wait...</div> ';
		events_database.index(events.documentID,function(items){
			events_list.innerHTML='';
			for(let i=0;i<items.length;i++){
				let event=items[i];
				events_list.innerHTML += `
					<a class="card event__card" href=CRUD/detail.html?event=${i}>
						<h4>${event.name}</h4>
						<p><i class="fa-solid fa-calendar-day"></i>${event.date}</p>
						<p><i class="fa-solid fa-location-dot"></i>${event.location}</p>
					</a>
				`;
			}
		});
	},
	detail:function(page_index){
		events_database.detail(events.documentID,page_index,function(event){
			document.querySelector('.detail').innerHTML += `
				<h2 class="title_audiowide">${event.name}</h2>
				<div class="time">
					<span><i class="fa-solid fa-calendar-day"></i>${event.date}</span>
					<span><i class="fa-solid fa-clock"></i>${event.time}</span>
					<span class="location"><i class="fa-solid fa-location-dot"></i>${event.location}</span>
				</div>
				<p class="para">${event.description}</p>
				<div class="keywords"></div>
			`
			event.keywords.forEach(key => {
				document.querySelector('.keywords').innerHTML += `
					<span><i class="fa-solid fa-hashtag"></i>${key}</span>
			`
			})
		});
	},
	create:function(){
		document.querySelector('form').addEventListener('submit', function(e){
			event.preventDefault();
			let name=document.querySelector('form input[name=name]');
			let location=document.querySelector('form input[name=location]');
			let date=document.querySelector('form input[name=date]');
			let time=document.querySelector('form input[name=time]');
			let description=document.querySelector('form textarea[name=description]');
			let keywords=document.querySelector('form textarea[name=keywords]');
			let org=document.querySelector('form input[name=org]');

			// generate id for event
			let id = Math.floor(Math.random() * 54215);
			let newEvent={
				id: `e-${id}`,
				name: name.value,
				location: location.value,
				date: date.value,
				time: time.value,
				keywords: keywords.value.trim().split(','),
				description: description.value,
				org: org.value,
			}
			events_database.create(events.documentID,newEvent);
			document.querySelector('form').reset()
		});
	},
	update:function(index){
		events_database.detail(events.documentID,index,function(item){
			document.querySelector('form input[name=name]').value=item.name
			document.querySelector('form input[name=location]').value=item.location
			document.querySelector('form input[name=date]').value=item.date
			document.querySelector('form input[name=time]').value=item.time
			document.querySelector('form textarea[name=description]').value=item.description
			document.querySelector('form textarea[name=keywords]').value=item.keywords
			document.querySelector('form input[name=org]').value=item.organizer

	
			
			document.querySelector('form').addEventListener('submit',function(e){
				e.preventDefault();
				let name=document.querySelector('form input[name=name]');
				let location=document.querySelector('form input[name=location]');
				let date=document.querySelector('form input[name=date]');
				let time=document.querySelector('form input[name=time]');
				let description=document.querySelector('form textarea[name=description]');
				let keywords=document.querySelector('form textarea[name=keywords]');
				let org=document.querySelector('form input[name=org]');

				// generate id for event
				let id = Math.floor(Math.random() * 854215);
				let newEvent={
					id: `e-${id}`,
					name: name.value,
					location: location.value,
					date: date.value,
					time: time.value,
					keywords: keywords.value.split(','),
					description: description.value,
					org: org.value,
				}
				events_database.update(events.documentID, index, newEvent)
			});
		});
	}
}
