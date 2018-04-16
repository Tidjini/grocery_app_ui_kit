import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import ProductItem from "../pieces/productItem";
import colors from "../../../assets/colors";
import { Button } from "../common/Button";
import Wellcome from "../scenes/wellcome";
const logo = require("../../../assets/groceries_green.png");

export default class ProductList extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.whiteYellow }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 50,
            backgroundColor: colors.white,
            paddingHorizontal: 10,
            alignItems: "center"
          }}
        >
          <Icon name="navicon" size={28} color={colors.davyGray} weight="100" />
          <View
            style={{
              alignItems: "center",
              paddingLeft: 20
            }}
          >
            <Image source={logo} style={{ width: 18, height: 18 }} />
            <Text
              style={{ color: colors.green, fontSize: 9, fontWeight: "bold" }}
            >
              Instafresh
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Icon name="search" size={28} color={colors.davyGray} />
            <Icon name="archive" size={28} color={colors.davyGray} />
          </View>
        </View>

        <ProductItem />
      </View>
    );
  }
}
