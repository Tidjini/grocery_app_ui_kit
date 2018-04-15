import React, { Component } from "react";
import { Text, View } from "react-native";
import { AnimatedSVGPaths } from "react-native-svg-animations";
import ds from "../assets/logo";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Hi tis me :-) Tidjini</Text>
        <AnimatedSVGPaths
          strokeColor={"red"}
          strokeWidth={5}
          duration={10000}
          height={600}
          width={600}
          scale={0.5}
          delay={100}
          ds={ds}
        />
      </View>
    );
  }
}
