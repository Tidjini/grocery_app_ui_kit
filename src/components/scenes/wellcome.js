import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { main } from "../../actions";
import colors from "../../../assets/colors";
import { Button, OutlineButton } from "../common";

const wellcomeImage = require("../../../assets/wellcome.png");

const { DEVICE_HEIGHT, DEVICE_WIDTH } = Dimensions.get("window");

class Wellcome extends Component {
  enterWithZipCode() {
    this.props.main();
  }
  enterWithCurrentLocation() {
    this.props.main();
  }
  render() {
    const {
      container,
      title,
      imageContainer,
      image,
      mainText,
      secondText,
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
          <Button onPress={this.enterWithCurrentLocation.bind(this)}>
            <Icon name="location-arrow" size={18} color={colors.white} />
            <Text>Use My Current Location</Text>
          </Button>
          <OutlineButton onPress={this.enterWithZipCode.bind(this)}>
            <Text style={outlineButtonText}>Enter your zip code</Text>
          </OutlineButton>
        </View>
      </View>
    );
  }
}

const styles = {
  container: { flex: 1, alignItems: "center", backgroundColor: colors.white },

  title: {
    fontSize: 24,
    fontWeight: "400",
    color: colors.green,
    marginTop: 28,
    fontFamily: "Entypo"
  },
  imageContainer: {
    width: DEVICE_WIDTH,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  image: { flex: 1, resizeMode: "contain" },
  copy: {
    color: colors.white,
    fontSize: 11,
    marginBottom: 10,
    fontFamily: "Evillcons"
  },

  mainText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: colors.dimGray,
    marginTop: 24,
    fontFamily: "Evillcons"
  },
  secondText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.dimGray,
    fontFamily: "Evillcons"
  },
  outlineButtonText: {
    fontWeight: "700",
    color: colors.yellow,
    textDecorationLine: "underline",
    fontFamily: "Evillcons"
  }
};

export default connect(null, { main })(Wellcome);
