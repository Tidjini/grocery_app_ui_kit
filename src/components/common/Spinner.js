import React from "react";
import { View, ActivityIndicator } from "react-native";
import colors from "../../../assets/colors";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} color={colors.green} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
