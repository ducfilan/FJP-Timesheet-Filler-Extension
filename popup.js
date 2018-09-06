var popupModule = (function() {
	var _showSaveSettingConfirmMessage = function() {
			$('#idOptionSaveStatus').removeClass('hidden');
			setTimeout(function() {
					$('#idOptionSaveStatus').addClass('hidden');
			}, 750);
	};

	var _saveSettingBtnClickHandler = function() {
			$('.setting-form__button-set').click(function() {
					storageFacade.setSettings({
							startTime: $('.setting-form__input-text.start-time').val(),
							endTime: $('.setting-form__input-text.end-time').val(),
							breakTime: $('.setting-form__input-text.break-time').val()
					}, _showSaveSettingConfirmMessage);
			});
	};

	var _sendMessageToDom = function(message, callback) {
			chrome.tabs.query({
					active: true,
					currentWindow: true
			}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, message, callback);
			});
	};

	var _fillTimesBtnClickHandler = function() {
			$('.setting-form__button-fill').click(function() {
					let startTime = $('.setting-form__input-text.start-time').val(),
							endTime = $('.setting-form__input-text.end-time').val(),
							breakTime = $('.setting-form__input-text.break-time').val();
					
					_sendMessageToDom({
							timeInfo: {
									startTime,
									endTime,
									breakTime
							}
					}, window.close);
			});
	};

	return {
			initializeSettings: function() {
					storageFacade.getSettings(formMan.populateSettings);
			},
			attachEventToSettings: function() {
					_saveSettingBtnClickHandler();
					_fillTimesBtnClickHandler();
			}
	}
})();

document.addEventListener('DOMContentLoaded', function() {
	popupModule.initializeSettings();
	popupModule.attachEventToSettings();
});