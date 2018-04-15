import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: colors.green,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.green,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Button };
