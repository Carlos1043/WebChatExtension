chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ active: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id!, { url: tabs[0].url });
  });
});
