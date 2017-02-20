'use strict';
var concertModule = angular.module('myApp.common', []);

concertModule.service('ticketService', function($http, $q, API_BASE_URL) {
	var self = this;
    var concertId = '';

    self.getConcertId = getConcertId;
    self.setConcertId = setConcertId;
	self.getTicketsOpts = getTicketsOpts;
	self.sendTicketsBougth = sendTicketsBougth;

    function getConcertId() {
        return concertId;
    }

    function setConcertId(newConcertId) {
        concertId = newConcertId;
    }

	function getTicketsOpts() {
		var deferred = $q.defer();
		$http.get(API_BASE_URL + concertId + '/tickets')
            .then(function(response) {
                deferred.resolve(response.data);
            },
            function(reason) {
                deferred.reject(reason);
            });
        return deferred.promise;
	}

	function sendTicketsBougth(tickets) {
		var deferred = $q.defer();
		$http.post(API_BASE_URL + concertId + '/tickets', tickets)
            .then(function(response) {
                deferred.resolve(response.data);
            },
            function(reason) {
                deferred.reject(reason);
            });
        return deferred.promise;
	}
});