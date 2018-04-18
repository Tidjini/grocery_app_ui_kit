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
import { Button, Spinner } from "../common";
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
      cartView: false,
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
  //this is the complete view
  renderCart() {
    if (this.state.cartView) {
      const items =
        this.props.items > 1
          ? this.props.items + " Items"
          : this.props.items + " Item";
      const price = this.props.items * 150;
      return (
        <View
          style={{
            position: "absolute",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(52, 52, 52, 0.6)",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flex: 1,
              width: Dimensions.get("window").width,
              backgroundColor: "rgba(52, 52, 52, 0)",
              justifyContent: "space-between"
            }}
          />
          <View
            style={{
              height: 50,
              alignItems: "center",
              width: Dimensions.get("window").width,
              backgroundColor: colors.jet
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                width: Dimensions.get("window").width,
                alignItems: "center",
                paddingHorizontal: 10
              }}
            >
              <Text style={{ color: "#FFF" }}>{items}</Text>
              <Text style={{ color: "#FFF" }}>{price} DA</Text>
              <TouchableOpacity onPress={this.setCartView.bind(this)}>
                <Text style={{ color: "#FFF" }}>PAYMENT</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomWidth: 0.7,
                borderColor: "#FFF",
                width: 80,
                marginBottom: 5
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.jet,
              height: Dimensions.get("window").height / 2 - 50,
              width: Dimensions.get("window").width
            }}
          />
        </View>
      );
    }
  }

  setCartView() {
    const cart = !this.state.cartView;
    this.setState({ cartView: cart });
  }
  renderCartView() {
    //console.log(this.props.products);
    if (this.props.items > 0) {
      const items =
        this.props.items > 1
          ? this.props.items + " Items"
          : this.props.items + " Item";
      const price = this.props.items * 150;
      return (
        <View
          style={{
            height: 50,
            alignItems: "center",
            width: Dimensions.get("window").width,
            backgroundColor: colors.jet
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width,
              alignItems: "center",
              paddingHorizontal: 10
            }}
          >
            <Text style={{ color: "#FFF" }}>{items}</Text>
            <Text style={{ color: "#FFF" }}>{price} DA</Text>
            <TouchableOpacity onPress={this.setCartView.bind(this)}>
              <Text style={{ color: "#FFF" }}>PAYMENT</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 0.7,
              borderColor: "#FFF",
              width: 80,
              marginBottom: 5
            }}
          />
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

  renderList() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
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
      );
    }
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
        {this.renderList()}
        {this.renderCartView()}
        {this.renderCart()}
      </View>
    );
  }
}
//

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
  const { items } = state.cart;
  return {
    items
  };
};

export default connect(mapStatesToProps)(ProductList);
