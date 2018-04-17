import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ListView
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";

import ProductItem from "../pieces/productItem";
import colors from "../../../assets/colors";
import { Button } from "../common/Button";
import Wellcome from "../scenes/wellcome";
import fakus from "../../../utils/fake.json";
const logo = require("../../../assets/groceries_green.png");

class ProductList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([1, 2])
    };

    this.itemWidth = (Dimensions.get("window").width - 10) / 2;
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

  renderCartView() {
    if (this.props.products.length > 0) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            flex: 1,
            backgroundColor: colors.jet
          }}
        >
          <Text style={{ color: "#FFF" }}>CART</Text>
        </View>
      );
    }
  }
  renderRow(data) {
    //const url = data.external_urls.spotify;
    //console.log(image);
    return (
      <ProductItem
        id={data.id}
        priceItem={data.price}
        nameItem={data.name}
        specificationItem={data.specification}
        imageItem={data.thumbnail}
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
          style={{
            flex: 0.9,
            alignSelf: "center"
          }}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingVertical: 10
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
// {this.renderCartView()}

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

const mapStatesToProps = state => {
  const { products } = state.cart;
  return {
    products
  };
};

export default connect(mapStatesToProps)(ProductList);
