import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import colors from "../../../assets/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ProductDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
        <View
          style={{
            height: 50,
            width: SCREEN_WIDTH,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            <Icon name="arrow-left" size={48} color={colors.davyGray} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={48} color={colors.green} />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={require('../../../assets/thumbnails/itemx09.jpg');} style={{width: 300, height: 500, resizeMode: 'cover'}}/>
        </View>
      </View>
    );
  }
}
