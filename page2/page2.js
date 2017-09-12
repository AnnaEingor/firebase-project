
myApp.controller('page2', function($scope, $firebaseArray){
	$scope.addStudent = function(){
		$scope.msg2="";
		var ref = firebase.database().ref("students");
		$firebaseArray(ref).$add($scope.student)
		.then(
			function(ref){
				$scope.student.name = "";
				$scope.student.department = "";
				$scope.student.level = "";
				$scope.msg2= "Student added successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg2 = false;
					})
				},2000)
			},
			function(error){
				console.log(error);
			}
			)
	};
	console.log('page2');
});