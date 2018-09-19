
# FJP Auto Timesheet Filler

Every month, I have to fill on a timesheet for my company. If I did not work overtime, then I have to repeat the process of filling around **5 (working days a week) * 4 (weeks) * 3 (fields) = ~60 textboxes**.
It takes minutes to fill and David-Copy-Paste, so I create this extension to cut it down to 1 second (1 click).
<p align="center">
<img src="https://github.com/ducfilan/FJP-Timesheet-Filler/raw/master/Extension%20screenshot.PNG">
</p>

## There are some notes when creating this extension:

 1. To send message from popup script to content script:
 I use Simple one-time requests, 
 Refer docs: https://developer.chrome.com/apps/messaging
 2. To fill the textboxes created with Angular:
 Because this site is created with Angular Js frontend, so setting the textbox value is not easy like setting the value attribute of the element. We need to dispatch an event:
```javascript
let  _fillTextbox  = (target, val) => {
  var  event  =  document.createEvent("HTMLEvents");
  event.initEvent("input", true, true);
  target.value  =  val;
  target.dispatchEvent(event);
};
```
You can find his function in timesheet-filler.js.
