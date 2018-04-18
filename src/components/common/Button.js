import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";

const Button = ({ onPress, color, children }) => {
  const { textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: color || colors.green,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color || colors.green,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
      }}
    >
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
  }
};

export { Button };
