import React, { createContext, ReactElement } from "react";
import { observer } from "mobx-react";

import { AppStore } from "../stores/App.ts";

type AppStoreProviderProps = {
  appStore: AppStore;
  children: ReactElement;
};

export const AppStoreContext = createContext();

export const AppStoreProvider = observer(
  ({ appStore, children }: AppStoreProviderProps) => {
    return (
      <AppStoreContext.Provider value={appStore}>
        {children}
      </AppStoreContext.Provider>
    );
  }
);
