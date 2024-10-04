import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/store";
import Main from "./src/Main";

export default function App() {
  /* return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ); */
  return (
    <Provider store={store}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
