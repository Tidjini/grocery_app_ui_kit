import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ListView
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import ProductItem from "../pieces/productItem";
import colors from "../../../assets/colors";
import { Button } from "../common/Button";
import Wellcome from "../scenes/wellcome";
import fakus from "../../../utils/fake.json";
const logo = require("../../../assets/groceries_green.png");

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([1, 2])
    };

    this.itemWidth = (Dimensions.get("window").width - 20) / 2;
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    //Get some data
    setTimeout(() => {
      // console.log(response)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(fakus),
        isLoading: false
      });
    }, 5000);
  }

  renderRow(data) {
    const image = "../../../assets/thumbnails/".concat(data.thumbnail);
    //const url = data.external_urls.spotify;
    console.log(image);
    return (
      <ProductItem
        priceItem={data.price}
        nameItem={data.name}
        specificationItem={data.specifcation}
        imageItem={image}
      />
    );
  }

  render() {
    const {
      container,
      topBarContainer,
      logoContainer,
      logoText,
      leftActionsContainer
    } = styles;
    return (
      <View style={container}>
        <View style={topBarContainer}>
          <Icon name="navicon" size={28} color={colors.davyGray} weight="100" />
          <View style={logoContainer}>
            <Image source={logo} style={{ width: 18, height: 18 }} />
            <Text style={logoText}>Instafresh</Text>
          </View>
          <View style={leftActionsContainer}>
            <Icon name="search" size={28} color={colors.davyGray} />
            <Icon name="archive" size={28} color={colors.davyGray} />
          </View>
        </View>
        <ListView
          style={{ flex: 1, paddingTop: 20, alignSelf: "center" }}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  container: { flex: 1, backgroundColor: colors.whiteYellow },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    paddingLeft: 20
  },
  logoText: { color: colors.green, fontSize: 9, fontWeight: "bold" },
  leftActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
