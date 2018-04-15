import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import colors from "../assets/colors";
import { Button } from "./components/common/Button";
import Wellcome from "./components/scenes/wellcome";
const logo = require("../assets/groceries_green.png");
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.yellowWhite }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 60,
            backgroundColor: colors.white,
            paddingHorizontal: 10,
            alignItems: "center"
          }}
        >
          <Icon name="navicon" size={32} color={colors.davyGray} weight="100" />
          <View
            style={{
              alignItems: "center",
              paddingLeft: 20
            }}
          >
            <Image source={logo} style={{ width: 20, height: 20 }} />
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
            <Icon name="search" size={32} color={colors.davyGray} />
            <Icon name="archive" size={32} color={colors.davyGray} />
          </View>
        </View>
      </View>
    );
  }
}
