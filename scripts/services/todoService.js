todo.service('todoService', ['$http', function($http){
	this.getPreloadedData = function(){
		return [{"id":"1","title":"Create page UI","status":"pending","desc":"Short dec sdfdsfdsj dsjfkdsj kfj ds","dueDate":new Date(),"assignedTo":"Nitish Hardeniya"},
				{"id":"2","title":"Style the page","status":"in-progress","desc":"Short dec sjksdjfkjds ","dueDate":new Date(),"assignedTo":"Nitish Hardeniya"},
				{"id":"3","title":"Test the functionality","status":"pending","desc":"Short dec pplplpasldplasd ","dueDate":new Date(),"assignedTo":"Nitish Hardeniya"}];
	};
	this.getUserList = function(){
		return [{"userId":1,"name":"Nitish Hardeniya"},{"userId":1,"name":"Akash neekhra"},{"userId":1,"name":"Gaurav gupta"}];
	}
}]);