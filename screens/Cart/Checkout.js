import React from "react";
import { View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal,
} from "../../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../constants";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [couponCode, setCouponCode] = React.useState("");

  React.useEffect(() => {
    const { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);

  function renderHeader() {
    return (
      <Header
        title="CHECK OUT"
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
      />
    );
  }

  function renderMyCards() {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, idx) => (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
            />
          ))}
      </View>
    );
  }

  function renderAddress() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image source={icons.location1} style={{ width: 30, height: 30 }} />
          <Text
            style={{ marginLeft: SIZES.radius, width: "85%", ...FONTS.body3 }}
          >
            300 Post Street San Francisco, CA
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            backgroundColor: COLORS.white,
            borderColor: COLORS.lightGray2,
            overflow: "hidden",
          }}
          placeholder="Coupon Code"
          onChange={(value) => {
            setCouponCode(value);
          }}
          appendComponent={
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.discount}
                style={{ width: 30, height: 30 }}
              />
            </View>
          }
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-180}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}
      >
        {renderMyCards()}
        {renderAddress()}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      <FooterTotal
        subTotal={37.97}
        total={37.97}
        shippingFee={0.0}
        onPress={() => navigation.replace("Success")}
      />
    </View>
  );
};

export default Checkout;
