import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import store from "./redux/store";
import { Provider } from "react-redux";

import TabComponent from "./src/screens/TabScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Center flex={1}>
          <TabComponent />
        </Center>
      </Provider>
    </NativeBaseProvider>
  );
}
