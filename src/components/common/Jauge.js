import React from "react";
import { View, Text, Dimensions } from "react-native";

import colors from "../../../assets/colors";

const Jauge = ({ percent }) => {
  //100%
  const width = Dimensions.get("window").width - 40;
  const widthPercent = percent * width / 100;
  return (
    <View style={{ margin: 20, justifyContent: "center" }}>
      <Text
        style={{
          color: colors.white,
          marginBottom: 5
        }}
      >
        Panier Niveau ({percent}%) sur 1 500 DA
      </Text>
      <View
        style={{
          width,
          height: 10,
          borderRadius: 5,
          backgroundColor: colors.yellow
        }}
      >
        <View
          style={{
            width: widthPercent,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.green
          }}
        />
      </View>
    </View>
  );
};

export { Jauge };
