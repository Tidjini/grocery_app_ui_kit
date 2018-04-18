import React, { Component } from "react";
import { View, Text } from "react-native";

import { Header } from "../common";
import colors from "../../../assets/colors";

export default class Cart extends Component {
  render() {
    const { container } = styles;
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
      </View>
    );
  }
}

const styles = {
  container: { flex: 1, backgroundColor: colors.whiteYellow }
};
