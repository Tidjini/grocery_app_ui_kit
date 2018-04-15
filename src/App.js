import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../assets/colors";
import { Button } from "./components/common/Button";

const wellcomeImage = require("../assets/wellcome.png");

const { DEVICE_HEIGHT, DEVICE_WIDTH } = Dimensions.get("window");

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            letterSpacing: 1.1,
            color: colors.green,
            marginTop: 28
          }}
        >
          Wellcome to Instafresh
        </Text>
        <View
          style={{
            width: DEVICE_WIDTH,
            height: 250,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <Image
            source={wellcomeImage}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            color: colors.jet,
            marginTop: 24
          }}
        >
          choose your location
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            color: colors.jet
          }}
        >
          and start shopping
        </Text>
        <View
          style={{
            height: 92,
            width: 300
          }}
        >
          <Button>Use My Current Location</Button>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            Login with Facebook
          </Icon.Button>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{ color: colors.yellow, textDecorationLine: "underline" }}
            >
              Enter your zip code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
