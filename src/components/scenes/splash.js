import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const logo = require("../../../assets/groceries.png");

export default class Splash extends Component {
  render() {
    const {
      container,
      main,
      title,
      description,
      imageContainer,
      image,
      copy
    } = styles;
    return (
      <View style={container}>
        <View style={main}>
          <Text style={title}>Instafresh</Text>
          <Text style={description}>Good food, delivred daily</Text>
          <View style={imageContainer}>
            <Image source={logo} style={image} />
          </View>
        </View>
        <Text style={copy}>
          Good food, delivred daily company copyright &copy;
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: { fontSize: 24, color: colors.white, fontWeight: "bold" },
  description: { color: colors.white },
  imageContainer: { marginBottom: 10, marginTop: 16 },
  image: { width: 64, height: 64 },
  copy: { color: colors.white, fontSize: 11, marginBottom: 10 }
};
