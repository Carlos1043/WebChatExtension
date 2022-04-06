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

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />);
