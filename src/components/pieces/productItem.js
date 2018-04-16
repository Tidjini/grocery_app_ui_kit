import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 20;
const itemHeight = 250;
const logo = require("../../../assets/groceries.png");

export default class ProductItem extends Component {
  render() {
    return (
      <View
        style={{
          width: itemWidth,
          height: itemHeight,
          backgroundColor: colors.white,
          margin: 5,
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: itemWidth,
            height: 140,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../../assets/thumbnails/itemx03.jpg")}
            style={{
              flex: 0.8,
              resizeMode: "contain"
            }}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.green }}>
          200 DA
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.jet }}>
          Fraises
        </Text>
        <Text style={{ fontSize: 14, color: colors.dimGray }}>Par Kg</Text>

        <View
          style={{
            flex: 1,
            width: itemWidth,
            flexDirection: "row",
            borderTopWidth: 1.5,
            borderColor: colors.yellowWhite,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: colors.green,
              borderWidth: 1.5,
              borderRadius: 24,
              width: 28,
              height: 28,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: colors.green
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: colors.jet
            }}
          >
            3
          </Text>
          <TouchableOpacity
            style={{
              borderColor: colors.green,
              borderWidth: 1.5,
              borderRadius: 24,
              width: 28,
              height: 28,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: colors.green
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// <TouchableOpacity
//   style={{
//     flex: 1,
//     flexDirection: "row",
//     borderTopWidth: 1.5,
//     borderColor: colors.yellowWhite,
//     alignItems: "center",
//     justifyContent: "center"
//   }}
// >
//   <Icon name="cart" size={28} color={colors.green} />
//   <Text style={{ color: colors.green, fontSize: 16 }}>
//     Ajouter au panier
//   </Text>
// </TouchableOpacity>
// </View>
