var timesheetFiller = (()=>{
    let _startTime = "09:00";
    let _endTime = "21:00";
    let _breakTime = "01:00";
    let _workdayFieldsSelector = "tr.ui-widget-content > td:first-child > span:not(.saturday):not(.sunday):not(.holiday)";

    let _createMapFunction = () => NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map;

    let _fillTextbox = (target, val) => {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        target.value = val;
        target.dispatchEvent(event);
    };

    return {
        init: ({startTime, endTime, breakTime}) => {
            _startTime = startTime;
            _endTime = endTime;
            _breakTime = breakTime;
        },
        fill: () => {
            _createMapFunction();
            document.querySelectorAll(_workdayFieldsSelector).map(o => {
                let wrapper = o.parentElement.parentElement;
                if (!wrapper.children[1]) return;
    
                let startTimeTextbox = wrapper.children[1].children[0].children[0];
                let endTimeTextbox   = wrapper.children[2].children[0].children[0];
                let breakTimeTextbox = wrapper.children[3].children[0].children[0];
    
                !startTimeTextbox.value && _fillTextbox(startTimeTextbox, _startTime);
                !endTimeTextbox.value   && _fillTextbox(endTimeTextbox, _endTime);
                !breakTimeTextbox.value && _fillTextbox(breakTimeTextbox, _breakTime);
            });
        }
    };
})();