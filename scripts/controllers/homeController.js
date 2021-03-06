todo.controller('homeController',function($scope,todoService){
	
	$scope.taskData = {
		dueDate:new Date()
	};

	var modalInstance;
	var modalScope = $scope.$new();
	$scope.todos = [];
	$scope.addTodo = function(){
		if($scope.todos){
			$scope.todos.push({"id":$scope.todos.length+1,"title":$scope.taskData.title,"status":"pending","desc":$scope.taskData.desc,"dueDate":$scope.taskData.dueDate,"assignedTo":$scope.taskData.assignedTo});
		}		
		localStorage.setItem("todosMaster", JSON.stringify($scope.todos));
		$scope.taskData = {
			dueDate:new Date()
		};
	};

	$scope.users = todoService.getUserList();

	//Pre-loaded dummy data
	var todoLS = JSON.parse(localStorage.getItem("todosMaster"));
	if(todoLS != null && todoLS.length==0){
		console.log('setter');
		$scope.todos = todoService.getPreloadedData();
		localStorage.setItem("todosMaster", JSON.stringify($scope.todos));
	}else{
		console.log('getter');
		$scope.todos = JSON.parse(localStorage.getItem("todosMaster"));
	}
	
	$scope.removeTask = function(taskIndex){
		$scope.todos.splice(taskIndex,1);
	};

	$scope.updateStatus = function(taskIndex){
		if($scope.todos[taskIndex].status == "pending"){
			$scope.todos[taskIndex].status = "in-progress";
		}else if($scope.todos[taskIndex].status == "in-progress"){
			$scope.todos[taskIndex].status = "done";
		}
	};

	$scope.getTaskDetails = function(taskIndex){
		$scope.taskDetails = $scope.todos[taskIndex];
	};


});
