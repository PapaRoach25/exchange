mainApp
	.controller('mainCtrl', function($scope, $http){
		
		 function mainChanges(currency,check){
		 	var type = {BTC:check.BTC ? 'price' : 'percent',LTC:check.LTC ? 'price' : 'percent',ETH:check.ETH ? 'price' : 'percent'};
			$http.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC" + currency ).then(function (response) {
                    // при успешной обработке запроса передаем данные в scope
                    $scope.Btc = response;
				$scope.btc = $scope.Btc.data.changes[type.BTC];
                   
                })
			$http.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC" + currency ).then(function (response) {
                    // при успешной обработке запроса передаем данные в scope
                    $scope.Ltc = response;

				$scope.ltc = $scope.Ltc.data.changes[type.LTC];
             
                })
			$http.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH" + currency ).then(function (response) {
                    // при успешной обработке запроса передаем данные в scope
                    $scope.Eth = response;

				$scope.eth = $scope.Eth.data.changes[type.ETH];
                   
                })				



		}
		var check = {ETH:document.querySelector('.ethereum input').checked,LTC:document.querySelector('.litecoin input').checked,BTC:document.querySelector('.bitcoin input').checked};
		var select = document.querySelector('#select');
		mainChanges(select.value,check);

		$scope.change = function (){
			var check = {ETH:document.querySelector('.ethereum input').checked,LTC:document.querySelector('.litecoin input').checked,BTC:document.querySelector('.bitcoin input').checked};
			mainChanges(select.value,check);
		}

		select.onchange = function(){
			var check = {ETH:document.querySelector('.ethereum input').checked,LTC:document.querySelector('.litecoin input').checked,BTC:document.querySelector('.bitcoin input').checked};
			mainChanges(select.value,check);
		}
	});