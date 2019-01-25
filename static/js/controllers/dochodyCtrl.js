angular.module('myApp.controllers').controller('dochodyCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading `dochody` controller');
            $scope.M = {};
            $scope.wynik = [];
            $scope.dane = [
                {pesel: 'AA11', name: 'Koepka', dochod: 413},
                {pesel: 'VA11', name: 'Rose', dochod: 461},
                {pesel: 'AA12', name: 'Johnson', dochod: 362},
                {pesel: 'VA12', name: 'Thomas', dochod: 377}
            ];


            /////////////////////////////////////////////////////////////

            let filterIncomesRange = function (incomes, low, high) {
                let wyfiltrowanie = [];
                for (let player of incomes){
                        if (player.dochod >= low && player.dochod <= high){
                            $scope.wynik.push(player);
                        }
                }
                return wyfiltrowanie;
            };

            let filterIncomesPesel = function (incomes, pre) {
                console.log('Filtrowanie po peselu; szukany prefix=' + pre);
                let wyfiltrowane = [];
                for (let player of incomes) {
                    if (player.pesel.startsWith(pre)) {
                        wyfiltrowane.push(player);
                    }
                }
                return wyfiltrowane;
            };




            $scope.filterIncomes = function (incomes) {
                let filterLow = true;
                let filterHi = true;
                let filterPesel = true;

                if (filterLow) {
                    incomes = filterIncomesRange(incomes, 0, 500);
                }

                if (filterPesel) {
                    incomes = filterIncomesPesel(incomes, 'Koe');
                }
                $scope.wynik = incomes;
            };

            $scope.wyszukaj = function () {
                $scope.wynik = [];
                for(let player of $scope.dane) {
                    if ($scope.iLow !== undefined) {    //sprawdzenie czy coś zostało wpisane w pole iLow na UI
                        if (player.dochod>= $scope.iLow) {
                            $scope.wynik.push(player);
                        }
                    }
                }
            }

        }
    ]
);