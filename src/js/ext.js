// ext.js
// job  : Sends message to service worker, gets a response
// lic  : https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-2
console.log('ext-content-script');

const message = { name: 'from-content script',
  options: { ramen: ['string', 'string', 'string'] }
};

chrome.runtime.sendMessage(message, (response) => {
  console.log('response received by content script, from service worker')
  console.log('response: %o', response);
  console.log();
});
