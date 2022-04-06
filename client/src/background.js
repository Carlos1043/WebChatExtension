chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true, currentWindow: true },
    tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { url: tabs[0].url });
    }
  );
});
