var kochava = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'KochavaEventManager', // mapped to our native Java class called "KochavaEventManager"
            'eventCall', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "title": title,
                "description": notes,
                "eventLocation": location,
                "startTimeMillis": startDate.getTime(),
                "endTimeMillis": endDate.getTime()
            }]
        );
     }
}
module.exports = kochava;
