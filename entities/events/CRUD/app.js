const events={
	documentID:'1083937811262095360',
	index:function(){
		document.getElementById('quotes').innerHTML='Loading quotes, please wait...';
		database.index(quotes.documentID,function(items){
			document.getElementById('quotes').innerHTML='';
			for(let i=0;i<items.length;i++){
				let quote=items[i];
				let el=document.createElement('div');
				el.innerHTML=`<div>
						<blockquote>
							<em><a href="detail.html?index=${i}">${quote.quote}</a></em>
						</blockquote>
						${quote.author}
						<hr />
					</div>`;
				document.getElementById('quotes').append(el);
			}
		});
	},
	detail:function(index){
		database.detail(quotes.documentID,index,function(item){
			document.getElementById('loading').style.display='none';
			document.getElementById('quote-author').innerText=item.author;
			document.getElementById('quote-text').innerText=item.quote;
			document.getElementById('btn-edit').setAttribute('href',`edit.html?index=${index}`);
							
			let deleteButton=document.getElementById('btn-delete');
			deleteButton.addEventListener('click',function(){
				database.delete(quotes.documentID,index);
			});
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
