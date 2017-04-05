var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', function ($scope) {
	$scope.msg = "this is indirect message via custom directive";
}])

app.directive('appDirective', [function () {
	return {
		template: "<strong>{{msg}}</strong>"
		//restrict: 'A',
		//link: function (scope, iElement, iAttrs) {
			
		//}
	}
}])
