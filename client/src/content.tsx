import React from "react";
import { createRoot } from "react-dom/client";

import { AppStoreProvider } from "./providers/AppStoreProvider";
import ContentScript from "./ContentScript";
import App from "./components/App";

export default function Popup() {
  return (
    <AppStoreProvider>
      <>
        <ContentScript />
        <App />
      </>
    </AppStoreProvider>
  );
}

const rootEl = document.createElement("div");
document.body.append(rootEl);

const root = createRoot(rootEl);

root.render(<Popup />);
