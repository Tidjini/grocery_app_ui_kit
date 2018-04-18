import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import colors from "../../../assets/colors";

const Header = ({ primaryIcon, secondaryIcon, thirdIcon, children }) => {
  const { topBarContainer, logoContainer, leftActionsContainer } = styles;
  return (
    <View style={topBarContainer}>
      <Icon name={primaryIcon} size={28} color={colors.davyGray} />
      <View style={logoContainer}>{children}</View>
      <View style={leftActionsContainer}>
        <Icon name={secondaryIcon} size={28} color={colors.davyGray} />
        <Icon name={thirdIcon} size={28} color={colors.davyGray} />
      </View>
    </View>
  );
};

const styles = {
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    alignItems: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
    position: "relative"
  },
  logoContainer: {
    alignItems: "center",
    paddingLeft: 20
  },
  leftActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export { Header };
