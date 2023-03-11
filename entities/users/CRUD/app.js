const users={
	documentID:'1083937811262095360',
	index:function(){
		let users_list = document.querySelector('.users__list')
		users_list.innerHTML='Loading quotes, please wait...';
		users_database.index(users.documentID,function(items){
			users_list.innerHTML='';
			for(let i=0;i<items.length;i++){
				let user=items[i];
				users_list.innerHTML += `
					<a class="card" href=CRUD/detail.html?user=${i}>
					<img src=${user.profile_pic}>
					<div id="text"></div>
					<h4>${user.name}</h4>
					</a>
				`;
			}
		});
	},
	detail:function(page_index){
		users_database.detail(users.documentID,page_index,function(user){
			//defualt picture for now
			document.querySelector('.detail').innerHTML += `
				<img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg">
				<h2 class="title_audiowide">${user.name}</h2>
				<p class="centerText">${user.bio}</p>
				<div class="time">
					<span> Age: ${user.age}</span>
					<span> Gender: ${user.gender}</span>
					<span> Email: ${user.email}</span>
				</div>
				<div class="time">
					<span> Phone#: ${user.phone}</span>
					<span> Occupation: ${user.occupation}</span>
				</div>
			`
		});
	},
	create:function(){
		document.querySelector('form').addEventListener('submit', function(e){
			event.preventDefault();
			let name=document.querySelector('form input[name=name]');
			let age=document.querySelector('form input[name=age]');
			let gender=document.querySelector('form input[name=gender]');
			let email=document.querySelector('form input[name=email]');
			let phone=document.querySelector('form input[name=phone]');
			let occupation=document.querySelector('form input[name=occupation]');
			let bio=document.querySelector('form textarea[name=bio]');
			let profile_pic=document.querySelector('form input[name=profile_pic]');
			let events_attending=document.querySelector('form input[name=events_attending]');

			// generate id for event
			let id = Math.floor(Math.random() * 54215);
			console.log(id)
			let newUser={
				id: `u-${id}`,
				name: name.value,
				age: age.value,
				gender: gender.value,
				email: email.value,
				phone: phone.value,
				occupation: occupation.value,
				bio: bio.value,
				profile_pic: profile_pic.value,
				events_attending: " ",
			}
			users_database.create(users.documentID,newUser);
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
