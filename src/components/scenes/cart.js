import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

import { Header, Counter, Spinner, Jauge, Button } from "../common";
import CartItem from "../pieces/cartItem";
import colors from "../../../assets/colors";

import fakus from "../../../utils/fake.json";

const { width, height } = Dimensions.get("window");

class Cart extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([1, 2])
    };

    this.itemWidth = Dimensions.get("window").width;
    this.renderRow = this.renderCartRow.bind(this);
  }

  componentWillMount() {
    //Get some data
    const cartItems = this.props.products;
    console.log(cartItems);
    setTimeout(() => {
      // console.log(response)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(cartItems),
        isLoading: false
      });
    }, 800);
  }

  renderCartRow(data) {
    //const url = data.external_urls.spotify;
    //console.log(image);
    const item = fakus.find(element => element.id === data.id);
    if (item != undefined) {
      return (
        <CartItem
          id={data.id}
          priceItem={item.price}
          nameItem={item.name}
          specificationItem={item.specification}
          imageItem={item.thumbnail}
          count={data.count}
        />
      );
    }
  }
  renderCartList() {
    const { cartList, cartListContentContainer } = styles;
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <ListView
          style={cartList}
          contentContainerStyle={cartListContentContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderCartRow}
        />
      );
    }
  }

  onSelectDeliveryOption(index, value) {
    // TODO:
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    });
  }
  render() {
    const { container, greenZone, greenZoneInf, greenZoneText } = styles;
    return (
      <ScrollView style={container}>
        <Header primaryIcon="close" secondaryIcon="question" thirdIcon="gear">
          <Text style={{ fontWeight: "bold" }}>PANIER</Text>
        </Header>
        <View style={greenZone}>
          <Text style={greenZoneText}>Livraison dans moins de 24 H</Text>
          <Text style={greenZoneInf}>GRATUITE</Text>
        </View>
        {this.renderCartList()}
        <Jauge percent={75} textColor={colors.jet} />

        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            color: colors.jet,
            fontWeight: "bold"
          }}
        >
          Sous-Total : 1 800 DA
        </Text>
        <View>
          <Text
            style={{
              padding: 10,
              color: colors.jet,
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            Livraison :
          </Text>
          <RadioGroup
            onSelect={(index, value) =>
              this.onSelectDeliveryOption(index, value)
            }
            size={18}
            thickness={2}
            color={colors.green}
            highlightColor={colors.lavenderGray_55}
            selectedIndex={0}
          >
            <RadioButton value={"1"}>
              <Text style={{ paddingLeft: 5, color: colors.jet }}>
                Dans moins de 24 H (gratuite)
              </Text>
            </RadioButton>

            <RadioButton value={"2"}>
              <Text style={{ paddingLeft: 5, color: colors.jet }}>
                Dans moins de 6H (400 DA)
              </Text>
            </RadioButton>

            <RadioButton value={"3"}>
              <Text style={{ paddingLeft: 5, color: colors.jet }}>
                Dans moins de 4H (500 DA)
              </Text>
            </RadioButton>
          </RadioGroup>
        </View>
        <Button>
          <Text>Confirmer</Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.whiteYellow,
    paddingBottom: 10
  },
  greenZone: {
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.napierGreen,
    padding: 10
  },
  greenZoneText: { color: colors.white },
  greenZoneInf: {
    color: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 2,
    backgroundColor: colors.green
  },
  cartList: {
    height: height / 1.8,
    width: width,
    alignSelf: "center"
  },
  cartListContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 5
  }
};

const mapStateToProps = state => {
  const { products } = state.cart;
  return {
    products
  };
};

export default connect(mapStateToProps)(Cart);
