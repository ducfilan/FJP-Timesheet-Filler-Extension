var storageFacade = (function() {
	return {
		getSettings: function(callback) {
			chrome.storage.sync.get({
				settings: null
			}, function(items) {
				if(callback) callback(items.settings);
			});
		},
		setSettings: function(newSettings, callback) {
			chrome.storage.sync.set({
				settings: newSettings
			}, function() {
				if(callback) callback();
			});
		}
	}
})();
