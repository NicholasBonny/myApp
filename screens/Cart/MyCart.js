import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../constants";
import {
  Header,
  IconButton,
  CartQuantityButton,
  StepperInput,
  FooterTotal,
} from "../../components";
import { SwipeListView } from "react-native-swipe-list-view";

const MyCart = ({ navigation }) => {
  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  function updateQuantityHandler(newQty, itemId) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === itemId ? { ...cl, qty: newQty } : cl
    );
    setMyCartList(newMyCartList);
  }

  function removeMyCartHandler(itemId) {
    let newMyCartList = [...myCartList];
    const idx = newMyCartList.findIndex((cart) => cart.id === itemId);
    newMyCartList.splice(idx, 1);
    setMyCartList(newMyCartList);
  }

  function renderHeader() {
    return (
      <Header
        title="MY CART"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 20,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderCart() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 90,
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItemContainer,
            }}
          >
            <View
              style={{
                width: 80,
                height: 90,
                marginLeft: -10,
              }}
            >
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                  postion: "absolute",
                  top: 9,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
              <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                ${data.item.price}
              </Text>
            </View>
            <StepperInput
              containerStyle={{
                height: 50,
                width: 120,
                backgroundColor: COLORS.white,
              }}
              value={data.item.qty}
              onAdd={() =>
                updateQuantityHandler(data.item.qty + 1, data.item.id)
              }
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{ marginRight: 10 }}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Cart List */}
      {renderCart()}
      {/* Footer */}
      <FooterTotal
        subTotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.navigate("MyCard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
