// ext.js
// job  : Receives message from service worker context
// lic  : https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-2
console.log('ext-content-script');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const reply = {name: 'from-content-script', sriracha: true};
    console.log('message received by content script, from service worker')
    console.log('sender: %o', sender);
    console.log('request: %o', request);
    console.log();
    return sendResponse(reply);
  });
