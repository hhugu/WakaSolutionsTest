'use strict';
var headerModule = angular.module('myApp.header', []);

headerModule.component('headerComponent', {
    templateUrl: '/common/components/header/header.html',
    controller: 'HeaderCtrl',
    bindings: {
        
    }
});

headerModule.controller('HeaderCtrl', BookingProductCtrl);
function BookingProductCtrl() {
}
