import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react";

import { AppStoreContext } from "./providers/AppStoreProvider";

function ContentScript() {
  const store = useContext(AppStoreContext);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log(message);
    });
  }, []);

  return null;
}

export default observer(ContentScript);
