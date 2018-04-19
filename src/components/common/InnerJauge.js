import React from "react";
import { View, Text, Dimensions } from "react-native";

import colors from "../../../assets/colors";

const InnerJauge = ({ height, percent, textColor }) => {
  //100%
  const width = Dimensions.get("window").width;
  const widthPercent = percent * width / 100;
  return (
    <View
      style={{
        width,
        height: height || 40,
        backgroundColor: colors.yellow,
        justifyContent: "center"
      }}
    >
      <View
        style={{
          width: widthPercent,
          height: 40,
          backgroundColor: colors.green,
          padding: 10
        }}
      >
        <Text
          style={{
            color: textColor || colors.white
          }}
        >
          Panier Niveau ({percent}%) sur 1 500 DA
        </Text>
      </View>
    </View>
  );
};

export { InnerJauge };
