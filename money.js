
app.directive('money', function () {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            ngModel: '=',
        },
        templateUrl: 'money.html',

        link: function (scope, iElement, iAttrs, ngModelController) {

            scope.$watch('ngModel', function () {
                ngModelController.$render();
            });

            ngModelController.updateData = function () {
                var money = scope.ngModel;
                scope.copper = money % 100;
                money -= scope.copper;
                money /= 100;
                scope.silver = money % 100;
                money -= scope.silver;
                money /= 100;
                scope.gold = money % 100;
                money -= scope.gold;
                money /= 100;
                scope.platin = money;
            };

            ngModelController.$render = function () {
                ngModelController.updateData();
            };

            ngModelController.$render();
        }
    };
});