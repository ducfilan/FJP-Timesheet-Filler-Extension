var formMan = (function(){
  return {
    populateSettings: function({startTime, endTime, breakTime}){
      $('.setting-form__input-text.start-time').val(startTime);
      $('.setting-form__input-text.end-time').val(endTime);
      $('.setting-form__input-text.break-time').val(breakTime);
    }
  }
})();
