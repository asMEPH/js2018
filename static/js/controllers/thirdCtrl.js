angular.module('myApp.controllers').controller('thirdCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};
            $scope.userCount = 0;
            $scope.avgScore = 0;
            $scope.bestScore = 0;
            $scope.wybraneZdjecie = 'https://image.flaticon.com/icons/png/512/3/3839.png';

            $scope.pictures = [
                {
                    'albumId': 1,
                    'id': 1,
                    'title': "accusamus beatae ad facilis cum similique qui sunt",
                    'url': "https://via.placeholder.com/600/92c952",
                    'thumbnailUrl': "https://via.placeholder.com/150/92c952"
                },
                {
                    'albumId': 1,
                    'id': 2,
                    'title': "reprehenderit est deserunt velit ipsam",
                    'url': "https://via.placeholder.com/600/771796",
                    'thumbnailUrl': "https://via.placeholder.com/150/771796"
                },
                {
                    "albumId": 1,
                    "id": 3,
                    "title": "officia porro iure quia iusto qui ipsa ut modi",
                    "url": "https://via.placeholder.com/600/24f355",
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                },
                {
                    "albumId": 1,
                    "id": 4,
                    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                    "url": "https://via.placeholder.com/600/d32776",
                    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
                },
                {
                    "albumId": 1,
                    "id": 5,
                    "title": "natus nisi omnis corporis facere molestiae rerum in",
                    "url": "https://via.placeholder.com/600/f66b97",
                    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
                },
                {
                    "albumId": 1,
                    "id": 6,
                    "title": "accusamus ea aliquid et amet sequi nemo",
                    "url": "https://via.placeholder.com/600/56a8c2",
                    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
                },
                {
                    "albumId": 1,
                    "id": 7,
                    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                    "url": "https://via.placeholder.com/600/b0f7cc",
                    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
                }
            ];
            //dane z https://jsonplaceholder.typicode.com/photos

            // Deklaracja tablicy uczestników z początkowymi danymi
            $scope.uczestnicy = [
                {
                    'imie' : 'Tadeusz',
                    'nazwisko' : 'Zakorczmenny',
                    'wynik' : 3.5
                }, {
                    'imie' : 'Jacek',
                    'nazwisko' : 'Zowakowski',
                    'wynik' : 2.0
                }, {
                    'imie' : 'Sylwia',
                    'nazwisko' : 'Polak',
                    'wynik' : 3.0
                }


            ];



            $scope.dodajUsera = function (imie, nazwisko, wynik) {
                console.log('Dodaję usera ' + nazwisko);
                $scope.uczestnicy.push({
                    'imie': imie,
                    'nazwisko': nazwisko,
                    'wynik': wynik
                });
            };



            $scope.sortNazwisko = function () {

                $scope.uczestnicy.sort((a, b) => {
                    if (a.nazwisko > b.nazwisko) return 1;
                    else return -1;
                });
            };


            $scope.sortImie = function () {

                $scope.uczestnicy.sort((a, b) => {
                    if (a.imie > b.imie) return 1;
                    else return -1;
                });
            };

            $scope.sortWynik = function () {

                $scope.uczestnicy.sort((a, b) => {
                    if (a.wynik > b.wynik) return 1;
                    else return -1;
                });
            };






        }
    ]
);