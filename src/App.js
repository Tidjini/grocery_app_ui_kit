import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../assets/colors";
import { Button } from "./components/common/Button";
import Wellcome from "./components/scenes/wellcome";

export default class App extends Component {
  render() {
    return <Wellcome />;
  }
}
