import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import teslaLogo from "../../assets/img/logo.png";
import menuLogo from "../../assets/img/menu.png";
import { fonts, sizes, spacings } from "../../styles/global";

const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const { width } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={teslaLogo} style={styles.logo} />
        <Image source={menuLogo} style={styles.menu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: isAndroid,
  },

  header: {
    width: width,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacings.sm,
  },

  logo: {
    width: 110,
    height: 30,
    resizeMode: "contain",
  },

  menu: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
