import { WithExpoFonts } from "./src/styles";

import { AppNavigator, Loading } from "./src/ui";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthWrapper, ModalWrapper } from "./src/wrappers";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <WithExpoFonts>
        <Provider store={store}>
          <ModalWrapper>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <AuthWrapper>
                <AppNavigator />
              </AuthWrapper>
            </PersistGate>
          </ModalWrapper>
        </Provider>
      </WithExpoFonts>
    </SafeAreaProvider>
  );
}
