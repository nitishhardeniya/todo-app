todo.controller('homeController',function($scope,todoService){
	$scope.name = "Nitish";
	$scope.addTodo = function(){
		$scope.todos.push({"id":$scope.todos.length+1,"title":"Release to production","status":"done","desc":"Short dec","assignedTo":"Nitish"});
	};

	$scope.todos = [{"id":"1","title":"Create page UI","status":"pending","desc":"Short dec","assignedTo":"Nitish"},
					{"id":"2","title":"Style the page","status":"pending","desc":"Short dec","assignedTo":"Nitish"},
					{"id":"3","title":"Test the functionality","status":"pending","desc":"Short dec","assignedTo":"Nitish"}]

	$scope.removeTask = function(taskIndex){
		$scope.todos.splice(taskIndex,1);
	};

	$scope.getTaskDetails = function(taskIndex){
		$scope.taskDetails = $scope.todos[taskIndex];
	};


});