import { WithExpoFonts } from "./src/styles";

import { AppNavigator, Loading } from "./src/ui";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <WithExpoFonts>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </WithExpoFonts>
  );
}
