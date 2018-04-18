import React from "react";

import { TouchableOpacity, Text } from "react-native";

const OutlineButton = ({ onPress, children }) => {
  const { outlineButton } = styles;
  return (
    <TouchableOpacity style={outlineButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = {
  outlineButton: { alignItems: "center", marginTop: 20 }
};

export { OutlineButton };
