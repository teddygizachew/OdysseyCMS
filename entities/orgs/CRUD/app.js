const orgs={
	documentID:'1083937811262095360',
	index:function(){
		let orgs__list = document.querySelector('.orgs__list')
		orgs__list.innerHTML='Loading quotes, please wait...';
		orgs_database.index(orgs.documentID,function(items){
			orgs__list.innerHTML='';
			for(let i=0;i<items.length;i++){
				let event=items[i];
				orgs__list.innerHTML += `
					<a class="card" href=CRUD/detail.html?event=${i}>
						<h4>${event.name}</h4>
					</a>
				`;
			}
		});
	},
	detail:function(page_index){
		orgs_database.detail(orgs.documentID,page_index,function(org){
			console.log(org)
			
			document.querySelector('.detail').innerHTML += `
				<h2 class="title_audiowide">${org.name}</h2>

				<span><i class="fa-solid fa-sitemap"></i>${org.type}</span></br></br>
				<span><i class="fa-solid fa-rocket"></i>${org.mission_statement}</span></br></br>

				<p class="contact">${org.contact}</p></br></br>

				<div class="time">
					<span><i class="fa-solid fa-calendar-day"></i>${org.founded_date}</span>
					<span class="location"><i class="fa-solid fa-location-dot"></i>${org.location}</span>
				</div>

				<div class="time">
					<span><i class="fa-solid fa-link"></i>${org.website}</span>
					<span><i class="fa-solid fa-phone-square"></i>${org.contact}</span>
				</div>
				`
		});
	},
	create:function(){
		document.querySelector('form').addEventListener('submit', function(e){
			event.preventDefault();
			let name=document.querySelector('form input[name=name]');
			let location=document.querySelector('form input[name=location]');
			let founded_date=document.querySelector('form input[name=founded_date]');
			let type=document.querySelector('form input[name=type]');
			let website=document.querySelector('form input[name=website]');
			let events=document.querySelector('form textarea[name=events]');
			let mission_statement=document.querySelector('form textarea[name=mission_statement]');
			let contact=document.querySelector('form input[name=contact]');
			let social_media_links=document.querySelector('form textarea[name=social_media_links]');
			let logo=document.querySelector('form input[name=logo]');

			// get attendees
			// generate id for event
			let id = Math.floor(Math.random() * 54215);
			console.log(id)
			let newOrg={
				id: `e-${id}`,
				name: name.value,
				location: location.value,
				founded_date: founded_date.value,
				type: type.value,
				website: website.value,
				events: events.value,
				mission_statement: mission_statement.value,
				contact: contact.value,
				social_media_links: social_media_links.value,
				logo: logo.value,
			}
			orgs_database.create(orgs.documentID,newOrg);
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
