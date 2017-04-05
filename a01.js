var app01 = angular.module('app01', []);


app01.controller('emp', ['$scope', '$log', 'empService', function($scope, $log, empService) {
    $log.log("Controller instantiated ... ");

    empService.getEmployees(function(result) { 
    	$log.log('in Func ' + result);
    	$scope.employees = result; 
    	$log.log('after Func ' + $scope.employees);

    });

}])


app01.service('empService', ['$log', function($log) {

    $log.log("Service instantiated ... ");

    this.getEmployees = function(cb) {
    	    $log.log("Data Parsed ... ");

        var arr = [{
            empNo: '00001',
            empName: 'Raghav',
            empSex: 'Male',
            empSalary: '1,00,000'
        }, {
            empNo: '00002',
            empName: 'Raman',
            empSex: 'Male',
            empSalary: '1,00,010'
        }, {
            empNo: '00003',
            empName: 'Bitch',
            empSex: 'Female',
            empSalary: '2,00,000'
        }, {
            empNo: '00004',
            empName: 'Manisha',
            empSex: 'Female',
            empSalary: '1,50,000'
        }, {
            empNo: '00005',
            empName: 'Don',
            empSex: 'Male',
            empSalary: '1,000'
        }];

        $log.log(arr);
        cb(arr);
    }
}])
