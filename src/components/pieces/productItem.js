import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";

import { Counter } from "../common";
import { addToCart, removeFromCart, details } from "../../actions";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 10;
const itemHeight = 250;
const logo = require("../../../assets/groceries.png");

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
class ProductItem extends Component {
  addToCart() {
    this.props.addToCart(this.props.id);
  }

  removeFromCart() {
    this.props.removeFromCart(this.props.id);
  }

  enterToDetails() {
    this.props.details();
  }
  renderCounterElements() {
    const {
      mainButton,
      mainButtonText,
      counterContainer,
      counterButton,
      counterButtonText,
      counterText
    } = styles;

    const item = this.props.products.find(
      element => element.id == this.props.id
    );

    if (item !== undefined && item.id === this.props.id && item.count > 0) {
      return (
        <Counter
          buttonSize={24}
          buttonColor={colors.green}
          onPlusPress={this.addToCart.bind(this)}
          onMinusPress={this.removeFromCart.bind(this)}
          count={item.count}
          countSize={16}
          countColor={colors.jet}
        />
      );
    } else {
      // console.log(item);
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
        <TouchableOpacity
          style={imageContainer}
          onPress={this.enterToDetails.bind(this)}
        >
          <Image source={images[this.props.imageItem]} style={image} />
        </TouchableOpacity>

        <Text style={price}>{this.props.priceItem}</Text>
        <Text style={itemName}>{this.props.nameItem}</Text>
        <Text style={specifcation}>{this.props.specificationItem}</Text>

        {this.renderCounterElements()}
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
    flex: 0.6,
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
  mainButtonText: { color: colors.green, fontSize: 16 }
};

const mapStatesToProps = state => {
  const { items, products } = state.cart;
  return {
    items,
    products
  };
};
export default connect(mapStatesToProps, {
  addToCart,
  removeFromCart,
  details
})(ProductItem);
