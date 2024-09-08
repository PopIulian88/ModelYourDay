import { WithExpoFonts } from "./src/styles";

import { AppNavigator } from "./src/ui";

export default function App() {
  return (
    <WithExpoFonts>
      <AppNavigator />
    </WithExpoFonts>
  );
}
