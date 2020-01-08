angular.
module('cart').
component('cart', {
    templateUrl: 'cart/cart.template.html',
    controller: ['$http', '$window', '$scope', 'ngCart',
        function cartController($http, $window, $scope, ngCart) {
            var self = this;

            $scope.sendCart = function() {
                let items = ngCart.getItems();
                for(let i = 0; i<items.length; ++i){
                    let item = items[i];
                    let order =
                        {
                            menuId: item.getData().menuId,
                            userId: item.getData().userId,
                        };
                    console.log(order);
                    var data = JSON.stringify(order);
                    $http.post('http://localhost:3000/orders', data)
                        .then(function (response) {
                            $window.location.href = '#!/restaurants';
                        }, function (response) {
                            console.log(response);
                        })
                }
            };
        }
    ]
});
