import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

import { Header } from "../common";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 10;
const images = [
  require("../../../assets/thumbnails/itemx01.jpg"),
  require("../../../assets/thumbnails/itemx02.jpg"),
  require("../../../assets/thumbnails/itemx03.jpg"),
  require("../../../assets/thumbnails/itemx04.jpg"),
  require("../../../assets/thumbnails/itemx05.jpg"),
  require("../../../assets/thumbnails/itemx06.jpg"),
  require("../../../assets/thumbnails/itemx07.jpg"),
  require("../../../assets/thumbnails/itemx08.jpg"),
  require("../../../assets/thumbnails/itemx09.jpg"),
  require("../../../assets/thumbnails/itemx10.jpg")
];
export default class Cart extends Component {
  render() {
    const { container, imageContainer, image } = styles;
    return (
      <View style={container}>
        <Header primaryIcon="close" secondaryIcon="question" thirdIcon="gear">
          <Text style={{ fontWeight: "bold" }}>PANIER</Text>
        </Header>
        <View
          style={{
            height: 40,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: colors.napierGreen,
            padding: 10
          }}
        >
          <Text style={{ color: colors.white }}>
            Next Delivery: Today, 11am-noon
          </Text>
          <Text
            style={{
              color: colors.white,
              paddingVertical: 2,
              paddingHorizontal: 7,
              borderRadius: 2,
              backgroundColor: colors.green
            }}
          >
            GRATUITE
          </Text>
        </View>

        <View
          style={{
            width,
            height: 80,
            borderBottomWidth: 1,
            borderColor: colors.davyGray,
            backgroundColor: colors.white,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity style={imageContainer}>
            <Image source={images[5]} style={image} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: { flex: 1, backgroundColor: colors.whiteYellow },
  imageContainer: {
    width: itemWidth,
    height: 80,
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  image: {
    flex: 0.6,
    resizeMode: "contain"
  }
};
