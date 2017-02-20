'use strict';
var shoppingCartModule = angular.module('myApp.shoppingCart', [
	'angular-toasty'
]);

shoppingCartModule.component('shoppingCartComponent', {
    templateUrl: 'common//components/shopping_cart/shopping_cart.html',
    controller: 'ShoppingCartCtrl as cartCtrl',
    bindings: {
    	totalTickets: '<'
    }
});

shoppingCartModule.controller('ShoppingCartCtrl', function ($rootScope, _, toasty, ticketService,
$location) {
	var self = this;

	var ticketsToServer = [];
	self.totalPrice = 0;
	self.buy = buy;

	$rootScope.$on('addTickets', function(event, tickets) {
		var ticketsPrice = tickets.ticketPrice * tickets.quantity;
		var tmp = _.filter(tickets, { id: tickets.id });

		if (tmp.lenght) {
			tmp[0].cantidad += tickets.quantity;
			tmp[0].precio += ticketsPrice;
		} else {
			ticketsToServer.push({
				id: tickets.ticketId,
				precio: ticketsPrice,
				cantidad: tickets.quantity
			});
		}
		self.totalPrice += ticketsPrice;
	});

	function buy() {
		var tmpObj = {};
		if (self.totalTickets === 0) {
			return;
		}

		tmpObj = {
			entradas: ticketsToServer,
			total: self.totalPrice
		};

		ticketService.sendTicketsBougth(tmpObj).then(function(response) {
			toasty.success('Compra realizada con éxito.');
			$location.path('/home');
		});

	}
});
