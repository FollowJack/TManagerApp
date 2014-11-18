angular.module('ControllerModule', [])
    .controller('TicketController', ['$scope', function ($scope) {

        $scope.hello = "Bla";

        $scope.help = function() {
            console.log($scope.tickets);
         };

        var ticket1 = {
            "id": 501,
            "subject": "Fun",
            "body": "Was machen Sachen.",
            "owner": "Merkel",
            "category": {"id": 1, "name": "Error"},
            "createdOn": "2014-11-12T00:00:00+01:00",
            "modifiedOn": "2014-11-13T00:00:00+01:00"
        };
        var ticket2 = {
            "id": 502,
            "subject": "Geilo",
            "body": "Was machen Sachen.",
            "owner": "Sendi",
            "category": {"id": 1, "name": "Error"},
            "createdOn": "2014-11-12T00:00:00+01:00",
            "modifiedOn": "2014-11-13T00:00:00+01:00"
        };

        $scope.tickets = [ticket1,ticket2];

    }]);


/* dependencies *//*
 var ticketService;

 initialize();
 }

 var initialize = function () {

 ticketService = new TicketService();

 var tickets = ticketService.get();
 drawTicketList(tickets);
 };

 function drawTicketList(tickets) {
 var listUl = document.getElementById("ticketList");

 for (var key in tickets) {
 var li = document.createElement("li");
 var a = document.createElement("a");
 a.appendChild(tickets[key].owner);
 li.appendChild(a);
 listUl.appendChild(li);
 }

 }
 */

