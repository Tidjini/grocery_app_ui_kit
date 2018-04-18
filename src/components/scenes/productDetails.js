import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Button } from "../common/Button";
import colors from "../../../assets/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ProductDetails extends Component {
  onReturn() {
    Actions.pop();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          paddingHorizontal: 16
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
            source={require("../../../assets/thumbnails/itemx09.jpg")}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            <TouchableOpacity>
              <Icon name="minus" size={48} color={colors.davyGray} />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.green,
                fontSize: 24,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              4
            </Text>
            <TouchableOpacity>
              <Icon name="plus" size={48} color={colors.davyGray} />
            </TouchableOpacity>
          </View>

          <Button style={{ alignSelf: "center" }}>
            <Text>AJOUTER AU PANIER</Text>
          </Button>
        </View>
      </View>
    );
  }
}
