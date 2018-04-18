import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import colors from "../../../assets/colors";

const { width, height } = Dimensions.get("window");
const itemWidth = width / 2 - 10;
export default ({
  buttonSize,
  buttonColor,
  onPlusPress,
  onMinusPress,
  count,
  countSize,
  countColor
}) => {
  const { counterContainer, counterText } = styles;

  return (
    <View style={counterContainer}>
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

const styles = {
  counterContainer: {
    flex: 1,
    width: itemWidth,
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderColor: colors.yellowWhite,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
};
