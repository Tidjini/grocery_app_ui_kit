import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Button } from "../common/Button";
import Counter from "../common/counter";
import colors from "../../../assets/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const images = [
  require("../../../assets/details/details_01.jpg"),
  require("../../../assets/details/details_02.jpg"),
  require("../../../assets/details/details_03.jpg")
];
export default class ProductDetails extends Component {
  onReturn() {
    Actions.pop();
  }
  render() {
    const imageIndex = Math.floor(Math.random() * 3);
    return (
      <View
        style={{
          flex: 1,
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          paddingHorizontal: 16,
          backgroundColor: colors.white
        }}
      >
        <View
          style={{
            height: 50,
            width: SCREEN_WIDTH - 32,
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={this.onReturn.bind(this)}>
            <Icon name="arrow-left" size={48} color={colors.davyGray} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={48} color={colors.green} />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={images[imageIndex]}
            style={{ width: 200, height: 320, resizeMode: "contain" }}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <Text
            style={{ color: colors.green, fontSize: 24, fontWeight: "bold" }}
          >
            480 DA /
          </Text>
          <Text style={{ color: colors.green }}> KG </Text>
        </View>
        <Text
          style={{
            color: colors.jet,
            fontSize: 24,
            marginTop: -5,
            marginLeft: 10
          }}
        >
          Avocado
        </Text>
        <Text
          style={{
            color: colors.jet,
            marginTop: 15,
            marginBottom: 20,
            marginLeft: 10
          }}
        >
          De très nombreux exemples de phrases traduites contenant "grocery
          store" – Dictionnaire français-anglais et moteur de recherche de
          traductions françaises.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",

            justifyContent: "space-between",
            marginBottom: 10
          }}
        >
          <Counter
            buttonSize={48}
            buttonColor={colors.davyGray}
            count={1}
            countSize={24}
            countColor={colors.green}
          />

          <Button style={{ alignSelf: "center" }}>
            <Text>AJOUTER</Text>
          </Button>
        </View>
      </View>
    );
  }
}
