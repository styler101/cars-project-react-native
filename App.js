import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
  Image,
  StatusBar as ReactNativeStatusBar,
} from "react-native";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Main from "./src/components/App";

import { StatusBar } from "expo-status-bar";

const isAndroid =
  Platform.OS === "android" ? ReactNativeStatusBar.currentHeight : 0;
const { width } = Dimensions.get("screen");
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      {!fontsLoaded ? (
        <ActivityIndicator />
      ) : (
        <React.Fragment>
          <StatusBar style="light" />
          <Main />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
