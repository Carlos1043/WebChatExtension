import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react";

import { AppStoreContext } from "./providers/AppStoreProvider";

function BackgroundScript() {
  const store = useContext(AppStoreContext);
  console.log(store.messages);

  useEffect(() => {
    chrome.tabs.onActivated.addListener(() => {
      chrome.tabs.query(
        { active: true, lastFocusedWindow: true, currentWindow: true },
        tabs => {
          //setUrl(tabs[0].url);
        }
      );
    });
  }, []);

  return null;
}

export default observer(BackgroundScript);
