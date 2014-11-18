/**
 * Created by Deniel on 15.11.2014.
 */
var TICKET = TICKET || {};

TICKET._baseURL = "http://localhost:8080/TManager/rest/ticket"; //ToDo
TICKET._searchBase = "http://search.twitter.com/"; //ToDo

var getTicketURL = TICKET._baseURL +
    "/lookup.json?screen_name=" +
    encodeURIComponent(theScreenName);

TICKET.Ticket = function (theScreenName, completion) {
    var self = this;
    self._screenName = "";
    self._ticketData = {};

    //loader
    PKUTIL.loadJSON(getTicketURL, function (success, data) {
        if (success) {
            self._ticketData = data;
        }
        else {
            self._ticketData = { "error": "Twitter error; rate limited?" };
            if (completion)
                completion();
        }
    });

    //Getter & Setter
    self.getScreenName = function () {
        return self._screenName;
    }

    self.setScreenName = function (theScreenName, completion) {
        self._screenName = theScreenName;
    }

    self.getTicketData = function ()
    {
        return self._ticketData;
    }


    self.getTicketCategoryURL = function ()
    {
        if (self._ticketData[0])
        {
            return self._ticketData[0].ticketCategoryURL;
        }
        return "";
    }
}
