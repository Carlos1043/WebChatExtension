import React from "react";
import { createRoot } from "react-dom/client";

import { AppStoreProvider } from "./providers/AppStoreProvider";
import ContentScript from "./ContentScript";
import App from "./components/App";

export default function Content() {
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
rootEl.setAttribute("id", "root-wse");

document.body.append(rootEl);

const root = createRoot(rootEl);
root.render(<Content />);
