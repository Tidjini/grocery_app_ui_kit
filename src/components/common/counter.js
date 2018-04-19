import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 10;
const Counter = ({
  buttonSize,
  buttonColor,
  onPlusPress,
  onMinusPress,
  count,
  countSize,
  countColor,
  width
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: width || itemWidth,
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
      }}
    >
      <TouchableOpacity onPress={onMinusPress}>
        <Icon name="minus" size={buttonSize} color={buttonColor} />
      </TouchableOpacity>
      <Text
        style={{ fontWeight: "bold", fontSize: countSize, color: countColor }}
      >
        {count}
      </Text>
      <TouchableOpacity onPress={onPlusPress}>
        <Icon name="plus" size={buttonSize} color={buttonColor} />
      </TouchableOpacity>
    </View>
  );
};

export { Counter };
