import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../../assets/colors";
import { Button } from "../common/Button";

const wellcomeImage = require("../../../assets/wellcome.png");

const { DEVICE_HEIGHT, DEVICE_WIDTH } = Dimensions.get("window");

export default class Wellcome extends Component {
  render() {
    const {
      container,
      title,
      imageContainer,
      image,
      mainText,
      secondText,
      outlineButton,
      outlineButtonText
    } = styles;
    return (
      <View style={container}>
        <Text style={title}>Wellcome to Instafresh</Text>
        <View style={imageContainer}>
          <Image source={wellcomeImage} style={image} />
        </View>

        <Text style={mainText}>Choose your location</Text>
        <Text style={secondText}>and start shopping</Text>
        <View
          style={{
            height: 92,
            width: 300
          }}
        >
          <Button>
            <Icon name="location-arrow" size={18} color={colors.white} /> Use My
            Current Location
          </Button>

          <TouchableOpacity style={outlineButton}>
            <Text style={outlineButtonText}>Enter your zip code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: { flex: 1, alignItems: "center" },

  title: {
    fontSize: 24,
    fontWeight: "400",
    color: colors.green,
    marginTop: 28
  },
  imageContainer: {
    width: DEVICE_WIDTH,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  image: { flex: 1, resizeMode: "contain" },
  copy: { color: colors.white, fontSize: 11, marginBottom: 10 },

  mainText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: colors.dimGray,
    marginTop: 24
  },
  secondText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.dimGray
  },
  outlineButton: { alignItems: "center", marginTop: 20 },
  outlineButtonText: {
    fontWeight: "700",
    color: colors.yellow,
    textDecorationLine: "underline"
  }
};
