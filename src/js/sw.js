// sw.js
// job	: Receives message from content script context
// lic 	: https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-2
console.log('ext-service-worker');

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		const reply = {
			name: 'from-service-worker',
			sriracha: true
		};
	  console.log('message received by service worker, from content script')
		console.log('sender: %o', sender);
		console.log('request: %o', request);
    console.log();
		sendResponse(reply);
	});
