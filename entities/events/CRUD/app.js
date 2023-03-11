const events={
	documentID:'1083937811262095360',
	index:function(){
		let events_list = document.querySelector('.events__list')
		events_list.innerHTML='Loading quotes, please wait...';
		events_database.index(events.documentID,function(items){
			events_list.innerHTML='';
			for(let i=0;i<items.length;i++){
				let event=items[i];
				events_list.innerHTML += `
					<a class="card" href=CRUD/detail.html?event=${i}>
						<h4>${event.name}</h4>
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

			// get attendees
			// generate id for event
			let id = Math.floor(Math.random() * 54215);
			console.log(id)
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
			events_database.create(events.documentID,newEvent);
			document.querySelector('form').reset()
		});
	},
	update:function(index){
		database.detail(quotes.documentID,index,function(item){
			document.getElementById('loading').style.display='none';
			document.querySelector('form input[name=author]').value=item.author;
			document.querySelector('form textarea[name=quote]').value=item.quote;
			
			document.querySelector('form').addEventListener('submit',function(e){
				e.preventDefault();
				let author=document.querySelector('form input[name=author]');
				let quote=document.querySelector('form textarea[name=quote]');
				let newQuote={
					author:author.value,
					quote:quote.value
				}
				database.update(quotes.documentID,index,newQuote);
			});
		});
	}
}
