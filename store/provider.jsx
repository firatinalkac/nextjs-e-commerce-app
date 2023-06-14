"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);
import { store } from "./index";

export const Providers = ({ children }) => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            {children}
         </PersistGate>
      </Provider>
   );
};
