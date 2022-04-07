import React from "react";
import { createRoot } from "react-dom/client";

import { AppStoreProvider } from "./providers/AppStoreProvider";
import ContentScript from "./ContentScript";

export default function Popup() {
  return (
    <AppStoreProvider>
      <ContentScript />
    </AppStoreProvider>
  );
}

const rootEl = document.createElement("div");
document.body.append(rootEl);

const root = createRoot(rootEl);

root.render(<Popup />);
