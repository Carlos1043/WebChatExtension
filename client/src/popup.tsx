import React from "react";
import { createRoot } from "react-dom/client";

import { AppStoreProvider } from "./providers/AppStoreProvider";
import { appStore } from "./stores/App";
import ContentScript from "./content";

export default function Popup() {
  return (
    <AppStoreProvider appStore={appStore}>
      <ContentScript />
    </AppStoreProvider>
  );
}

const rootEl = document.createElement("div");
document.body.append(rootEl);

const root = createRoot(rootEl);

root.render(<Popup />);
