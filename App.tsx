import { WithExpoFonts } from "./src/styles";

import { AppNavigator, Loading } from "./src/ui";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthWrapper } from "./src/wrappers";

export default function App() {
  return (
    <WithExpoFonts>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AuthWrapper>
            <AppNavigator />
          </AuthWrapper>
        </PersistGate>
      </Provider>
    </WithExpoFonts>
  );
}
