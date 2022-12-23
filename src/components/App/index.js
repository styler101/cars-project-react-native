import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("screen");
import teslaLogo from "../../assets/img/logo.png";
import menuLogo from "../../assets/img/menu.png";
import data from "../../data/cars";
import Card from "../Card";

const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <Card item={item} style={styles.listContainer} />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  list: {
    position: "relative",
  },
});
