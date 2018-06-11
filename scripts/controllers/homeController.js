todo.controller('homeController',function($scope,$uibModal,todoService){
	
	$scope.taskData = {
		dueDate:new Date()
	};

	var modalInstance;
	var modalScope = $scope.$new();
	$scope.addTodo = function(){
		/*modalInstance = $uibModal.open({
			templateUrl: 'views/create-task.html',
			ariaLabelledBy: 'modal-title',
      		ariaDescribedBy: 'modal-body',
			size:'md',
			scope:modalScope
		});

		modalScope.createTask = function(){
		};*/

		$scope.todos.push({"id":$scope.todos.length+1,"title":$scope.taskData.title,"status":"pending","desc":$scope.taskData.desc,"dueDate":$scope.taskData.dueDate,"assignedTo":"Nitish"});
		$scope.taskData = {};
	};

	$scope.closeModal = function(){
		modalInstance.dismiss('cancel');
	};

	$scope.todos = [{"id":"1","title":"Create page UI","status":"pending","desc":"Short dec","assignedTo":"Nitish"},
					{"id":"2","title":"Style the page","status":"in-progress","desc":"Short dec","assignedTo":"Nitish"},
					{"id":"3","title":"Test the functionality","status":"pending","desc":"Short dec","assignedTo":"Nitish"}];

	$scope.removeTask = function(taskIndex){
		$scope.todos.splice(taskIndex,1);
	};

	$scope.getTaskDetails = function(taskIndex){
		$scope.taskDetails = $scope.todos[taskIndex];
	};


});