import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react";

import { AppStoreContext } from "./providers/AppStoreProvider";

function ContentScript() {
  const store = useContext(AppStoreContext);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      store.setUrl(message.url);
    });
  }, []);

  return null;
}

export default observer(ContentScript);
