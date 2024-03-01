# chrome-message-passing-4
Basic Chrome extension message passing between content script (as sender) and service worker (as receiver)

### Summary


Greetings! 👋

This Chrome browser extension example demonstrates simple message passing between two contexts: the **content script** context and the **service worker** context.

```
***********                ***********
* content * message------>>* service *
* script  *                * worker  *
*         *<<----response  *         *
***********                ***********
sender                     receiver
```

### References
  + [Chrome extension service workers][g_sw]
  + [Chrome extension content script][g_cs]
---
[g_sw]: https://developer.chrome.com/docs/extensions/develop/concepts/service-workers
[g_cs]: https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
