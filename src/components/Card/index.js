import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { spacings, colors, fonts, sizes } from "../../styles/global";
const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const { width, height } = Dimensions.get("screen");

export default function Card({ item }) {
  return (
    <ImageBackground source={item.image} style={styles.imgWrapper}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>{item.name}</Text>
          <Text style={styles.contentDescription}> {item.description}</Text>
        </View>
        <View style={styles.contentFooter}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btn1Text}> Custom Order </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text tyle={styles.btn2Text}> Existing Inventory </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  imgWrapper: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  contentHeader: {
    width: width,
    alignItems: "center",
  },

  contentTitle: {
    fontSize: sizes["3xl"],
    fontFamily: fonts[600],
    paddingHorizontal: spacings.xsm,
  },

  contentDescription: {
    fontSize: sizes.base,
    color: colors.gray[600],
    fontFamily: fonts[300],
  },

  contentFooter: {
    width: width,
    paddingBottom: spacings.lg,
    alignItems: "center",
  },

  btn1: {
    width: 280,
    height: 40,
    backgroundColor: colors.gray[700],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  btn1Text: {
    color: colors.white,
    fontSize: sizes.base,
    fontFamily: fonts[400],
  },
  btn2: {
    width: 280,
    height: 45,
    backgroundColor: colors.white,
    marginTop: spacings.sm,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  btn2Text: {
    color: colors.black,
    fontSize: sizes.base,
    fontFamily: fonts[400],
  },
});
