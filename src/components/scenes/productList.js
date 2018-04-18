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

import { cart } from "../../actions";
import ProductItem from "../pieces/productItem";
import colors from "../../../assets/colors";
import { Button, Spinner, Header, OutlineButton } from "../common";
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
      const { outlineButtonText } = styles;
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
          >
            <View style={{ margin: 20, justifyContent: "center" }}>
              <Text
                style={{
                  color: colors.white,
                  marginBottom: 5
                }}
              >
                Panier Niveau (80%) sur 1 500 DA
              </Text>
              <View
                style={{
                  width: Dimensions.get("window").width - 40,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: colors.yellow
                }}
              >
                <View
                  style={{
                    width: Dimensions.get("window").width - 80,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: colors.green
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: 50,
                margin: 20,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Button color={colors.yellow}>
                <Text style={{ color: colors.jet }}>Vider Tous</Text>
              </Button>
              <Button>
                <Text>Confirmer</Text>
              </Button>
            </View>
            <OutlineButton onPress={this.enterToCart.bind(this)}>
              <Text style={outlineButtonText}>Voir Le Panier En Details</Text>
            </OutlineButton>
          </View>
        </View>
      );
    }
  }

  enterToCart() {
    this.props.cart();
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
    const { container, logoText } = styles;
    return (
      <View style={container}>
        <Header
          primaryIcon="navicon"
          secondaryIcon="search"
          thirdIcon="archive"
        >
          <Image source={logo} style={{ width: 18, height: 18 }} />
          <Text style={logoText}>Instafresh</Text>
        </Header>
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
  logoText: { color: colors.green, fontSize: 9, fontWeight: "bold" },
  outlineButtonText: {
    fontWeight: "700",
    color: colors.yellow,
    textDecorationLine: "underline",
    fontFamily: "Evillcons"
  }
};

const mapStatesToProps = state => {
  const { items } = state.cart;
  return {
    items
  };
};

export default connect(mapStatesToProps, { cart })(ProductList);
