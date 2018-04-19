import React, { Component } from "react";
import { Image, Text, View, Dimensions, TouchableOpacity } from "react-native";

import { Counter } from "../common";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 3 - 60;
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
export default class CartItem extends Component {
  render() {
    const {
      container,
      imageContainer,
      image,
      itemName,
      specifcation,
      price
    } = styles;
    return (
      <View style={container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#00000000" || colors.lavenderGray_AA,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity style={imageContainer}>
            <Image source={images[this.props.imageItem]} style={image} />
          </TouchableOpacity>

          <View style={{ justifyContent: "center", flex: 0.8 }}>
            <Text style={itemName}>{this.props.nameItem}</Text>
            <Text style={specifcation}>{this.props.specificationItem}</Text>
            <Text style={price}>{this.props.priceItem}</Text>
          </View>

          <View>
            <Counter
              width={width / 2.5}
              buttonSize={36}
              buttonColor={colors.green}
              count={this.props.count}
              countSize={18}
              countColor={colors.jet}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    width,
    height: 80,
    borderBottomWidth: 0.7,
    borderColor: colors.lavenderGray_AA,
    backgroundColor: colors.white
  },
  imageContainer: {
    width: itemWidth,
    height: 80,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 0.6,
    resizeMode: "contain"
  },
  price: { fontSize: 12, fontWeight: "bold", color: colors.green },
  itemName: { fontSize: 16, fontWeight: "bold", color: colors.jet },
  specifcation: { fontSize: 10, color: colors.dimGray }
};
