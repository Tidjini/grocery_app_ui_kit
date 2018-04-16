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
    const {
      mainButton,
      mainButtonText,
      counterContainer,
      counterButton,
      counterButtonText,
      counterText
    } = styles;
    if (this.props.items == 0) {
      return (
        <TouchableOpacity
          style={mainButton}
          onPress={this.addToCart.bind(this)}
        >
          <Icon name="cart" size={28} color={colors.green} />
          <Text style={mainButtonText}>Ajouter au panier</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={counterContainer}>
        <TouchableOpacity
          style={counterButton}
          onPress={this.removeFromCart.bind(this)}
        >
          <Text style={counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={counterText}>{this.props.items}</Text>
        <TouchableOpacity
          style={counterButton}
          onPress={this.addToCart.bind(this)}
        >
          <Text style={counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      container,
      imageContainer,
      image,
      price,
      itemName,
      specifcation
    } = styles;
    return (
      <View style={container}>
        <View style={imageContainer}>
          <Image
            source={require("../../../assets/thumbnails/itemx03.jpg")}
            style={image}
          />
        </View>

        <Text style={price}>200 DA</Text>
        <Text style={itemName}>Fraises</Text>
        <Text style={specifcation}>Par Kg</Text>

        {this.renderCartElements()}
      </View>
    );
  }
}

const styles = {
  container: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: colors.white,
    margin: 5,
    alignItems: "center"
  },
  imageContainer: {
    width: itemWidth,
    height: 140,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 0.8,
    resizeMode: "contain"
  },
  price: { fontSize: 16, fontWeight: "bold", color: colors.green },
  itemName: { fontSize: 20, fontWeight: "bold", color: colors.jet },
  specifcation: { fontSize: 14, color: colors.dimGray },
  mainButton: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderColor: colors.yellowWhite,
    alignItems: "center",
    justifyContent: "center"
  },
  mainButtonText: { color: colors.green, fontSize: 16 },
  counterContainer: {
    flex: 1,
    width: itemWidth,
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderColor: colors.yellowWhite,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  counterButton: {
    borderColor: colors.green,
    borderWidth: 1.5,
    borderRadius: 24,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  counterButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green
  },
  counterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.jet
  }
};

const mapStatesToProps = state => {
  const { items } = state.cart;
  return {
    items
  };
};
export default connect(mapStatesToProps, { addToCart, removeFromCart })(
  ProductItem
);
