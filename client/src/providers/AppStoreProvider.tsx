import React, { createContext, ReactElement } from "react";
import { observer } from "mobx-react";

import { appStore, AppStore } from "../stores/AppStore";

export const AppStoreContext = createContext<AppStore>(appStore);

export const AppStoreProvider = observer(
  ({ children }: { children: ReactElement }) => {
    return (
      <AppStoreContext.Provider value={appStore}>
        {children}
      </AppStoreContext.Provider>
    );
  }
);
