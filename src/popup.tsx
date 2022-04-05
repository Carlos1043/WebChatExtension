import React, { useEffect } from "react";
import { render } from "react-dom";

import { AppStoreProvider } from "./providers/AppStoreProvider";
import { appStore } from "./stores/App";
import BackgroundScript from "./background";

export default function Popup() {
  return (
    <AppStoreProvider appStore={appStore}>
      <BackgroundScript />
    </AppStoreProvider>
  );
}

render(<Popup />, document.getElementById("root"));
