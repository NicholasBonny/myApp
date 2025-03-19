import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import React from "react";

const CartQuantityButton = ({
  containerStyle,
  iconStyle,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightOrange2,
        ...containerStyle,
      }}
    >
      <Image
        source={icons.cart}
        style={{
          width: 18,
          height: 18,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 3,
          right: 3,
          height: 13,
          width: 13,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            // ...FONTS.body5,
            fontSize: 10,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityButton;
