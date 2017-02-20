'use strict';
var homeModule = angular.module('myApp.home', ['myApp.common', 'angular-toasty']);

homeModule.controller('HomeCtrl', function(ticketService, $location, toasty) {
	var self = this;

	self.goToConcertDetail = goToConcertDetail;
	self.mockConcertsData = {
		important: {
			id: 'shakira',
			name: 'Shakira',
			src: 'http://2.bp.blogspot.com/-G229j8ayrQw/TiPJ4zEx4vI/AAAAAAAAAfw/HZftCfh3erc/s1600/MERIDA+SHAKIRA+2011+Logo+%25282%2529.jpg',
		}, otherConcerts: [{
			id:'duokie',
			name: 'Duo Kie',
			src: 'http://mp3.hhgroups.com/conciertos/Duo-Kie-en-Valencia-3806.jpg',
		}, {
			id: 'doblev',
			name: 'Violadores del Verso',
			src: 'http://mp3.hhgroups.com/conciertos/Violadores-del-Verso-en-concierto-en-Murcia-2176.jpg'
		}]
	};

	function goToConcertDetail(concertId) {
		if (concertId !== 'shakira') { 
			toasty.error('Concierto no disponible. <br/>Por favor seleccione el de Shakira.');
			return;
		}
		ticketService.setConcertId(concertId);
		$location.path('/concert');
	}
}); 
