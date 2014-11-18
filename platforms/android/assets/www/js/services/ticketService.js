/**
 * Created by Deniel on 16.11.2014.
 */
var ticket1 = {
    "id": 501,
    "subject": "Fun",
    "body": "Was machen Sachen.",
    "owner": "Merkel",
    "category": {"id": 1, "name": "Error"},
    "createdOn": "2014-11-12T00:00:00+01:00",
    "modifiedOn": "2014-11-13T00:00:00+01:00"
};

var tickets = [ticket1];

var TicketService = function () {

    var _self = this;

    _self.get = function () {
        return tickets;
    }




};
