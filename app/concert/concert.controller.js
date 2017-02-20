'use strict';
var concertModule = angular.module('myApp.concert', [
	'myApp.common',
	'myApp.shoppingCart',
	'ngRoute',
	'angular-toasty'
]);

concertModule.controller('ConcertCtrl', function(ticketService, $routeParams, $rootScope, toasty) {
	var self = this;
	self.ticketsOpts = [];
	self.numberTickets = [];
	self.totalTicketsAdd = 0;

	self.addTickets = addTickets;

	init();

	function init() {
		ticketService.getTicketsOpts($routeParams.concertId).then(function(tickets) {
			self.ticketsOpts = tickets;
		});
	}

	function addTickets(index) {
		if (self.totalTicketsAdd + self.numberTickets[index] > 10) {
			var msg = 'Sólo pueden comprarse 10 entradas.';
			if (self.totalTicketsAdd < 10) {
				msg += '<br/> Puede añadir al carrito ' + (10 - self.totalTicketsAdd) + ' más.'; 
			}
			toasty.info(msg);
			return;
		}

		$rootScope.$emit('addTickets', { 
			ticketId: self.ticketsOpts[index].id,
			ticketPrice: self.ticketsOpts[index].precio,
			quantity: self.numberTickets[index]
		});

		self.totalTicketsAdd += self.numberTickets[index];

	}
}); 
