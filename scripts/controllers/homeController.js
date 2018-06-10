todo.controller('homeController',function($scope,todoService){
	$scope.name = "Nitish";
	$scope.addTodo = function(){
		$scope.todos.push({"title":"Release to production","status":"done","desc":"Short dec","assignedTo":"Nitish"});
	};

	$scope.todos = [{"title":"Create page UI","status":"pending","desc":"Short dec","assignedTo":"Nitish"},
					{"title":"Style the page","status":"pending","desc":"Short dec","assignedTo":"Nitish"},
					{"title":"Test the functionality","status":"pending","desc":"Short dec","assignedTo":"Nitish"}]
});