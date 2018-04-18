import React, { Component } from "react";
import { Image, Text, View } from "react-native";

import Counter from "../common/counter";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");

export default class CartItem extends Component {
  render() {
    <View
      style={{
        width,
        height: 80,
        borderBottomWidth: 1,
        borderColor: colors.dimGray
      }}
    />;
  }
}
