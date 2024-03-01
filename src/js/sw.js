// sw.js
// job	: Receives message from content script context
// lic 	: https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-2
console.log('ext-service-worker');

chrome.action.onClicked.addListener((tab) => {
	const message = { name: 'from-service-worker', greeting:'howdy!' };
	console.log(tab);
	console.log(tab.id);
	console.log(message);
	chrome.tabs.sendMessage(tab.id, {'message': message}, (response) => {
  	console.log('response received by service-worker, from content-script')
  	console.log('response: %o', response);
		console.log();
	});
});
