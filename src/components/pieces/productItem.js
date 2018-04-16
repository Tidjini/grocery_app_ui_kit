import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";

import { addToCart, removeFromCart } from "../../actions";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 20;
const itemHeight = 250;
const logo = require("../../../assets/groceries.png");

class ProductItem extends Component {
  addToCart() {
    this.props.addToCart();
  }

  removeFromCart() {
    this.props.removeFromCart();
  }

  renderCartElements() {
    console.log(this.props.items);
    if (this.props.items == 0) {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            borderTopWidth: 1.5,
            borderColor: colors.yellowWhite,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={this.addToCart.bind(this)}
        >
          <Icon name="cart" size={28} color={colors.green} />
          <Text style={{ color: colors.green, fontSize: 16 }}>
            Ajouter au panier
          </Text>
        </TouchableOpacity>
      );
    }
    return (
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
            width: 24,
            height: 24,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={this.removeFromCart.bind(this)}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.green
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: colors.jet
          }}
        >
          {this.props.items}
        </Text>
        <TouchableOpacity
          style={{
            borderColor: colors.green,
            borderWidth: 1.5,
            borderRadius: 24,
            width: 24,
            height: 24,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={this.addToCart.bind(this)}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.green
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

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

        {this.renderCartElements()}
      </View>
    );
  }
}

const mapStatesToProps = state => {
  const { items } = state.cart;
  return {
    items
  };
};
export default connect(mapStatesToProps, { addToCart, removeFromCart })(
  ProductItem
);
