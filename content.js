chrome.runtime.onMessage.addListener(function (request) {
    console.log(request);
    timesheetFiller.init(request.timeInfo);
    timesheetFiller.fill();
});
