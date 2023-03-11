const users_database={
	index:function(documentID,callback){
		api.GET(documentID, function (response) {
			callback(response.data.users);
		});
	},
	detail:function(documentID,index,callback){
		api.GET(documentID,function(response){
			callback(response.data.users[index]);
		});
	},
	update:function(documentID,index,newData){
		api.GET(documentID,function(response){
			response.data.users[index]=newData;
			api.PUT(documentID,response.data.users,function(){
				alert('The quote has been updated. Please go back to the home page');
			});
		});
	},
	delete:function(documentID,index){
		api.GET(documentID,function(response){
			response.data.users.splice(index,1);
			api.PUT(documentID,response.data.users,function(){
				alert('The quote has been deleted. Please go back to the home page');
			});
		});
	},
	create:function(documentID,newData){
		api.GET(documentID,function(response){
			response.data.users.push(newData);
			api.PUT(documentID,response.data.users,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
}



const events_database={
	index:function(documentID,callback){
		api.GET(documentID, function (response) {
			callback(response.data.events);
		});
	},
	detail:function(documentID,index,callback){
		api.GET(documentID,function(response){
			callback(response.data.events[index]);
		});
	},
	update:function(documentID,index,newData){
		api.GET(documentID,function(response){
			response.data.events[index]=newData;
			api.PUT(documentID,response.data.events,function(){
				alert('The quote has been updated. Please go back to the home page');
			});
		});
	},
	delete:function(documentID,index){
		api.GET(documentID,function(response){
			response.data.events.splice(index,1);
			api.PUT(documentID,response.data.events,function(){
				alert('The quote has been deleted. Please go back to the home page');
			});
		});
	},
	create:function(documentID,newData){
		api.GET(documentID,function(response){
			response.data.events.push(newData);
			api.PUT(documentID,response.data.events,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
}




const orgs_database={
	index:function(documentID,callback){
		api.GET(documentID, function (response) {
			callback(response.data.orgs);
		});
	},
	detail:function(documentID,index,callback){
		api.GET(documentID,function(response){
			callback(response.data.orgs[index]);
		});
	},
	update:function(documentID,index,newData){
		api.GET(documentID,function(response){
			response.data.orgs[index]=newData;
			api.PUT(documentID,response.data.orgs,function(){
				alert('The quote has been updated. Please go back to the home page');
			});
		});
	},
	delete:function(documentID,index){
		api.GET(documentID,function(response){
			response.data.orgs.splice(index,1);
			api.PUT(documentID,response.data.orgs,function(){
				alert('The quote has been deleted. Please go back to the home page');
			});
		});
	},
	create:function(documentID,newData){
		api.GET(documentID,function(response){
			response.data.orgs.push(newData);
			api.PUT(documentID,response.data.orgs,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
}