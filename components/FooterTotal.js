import { View, Text, Platform } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { SIZES, COLORS, FONTS } from "../constants";
import { TextButton, LineDivider } from ".";

export default function FooterTotal({ subTotal, total, onPress }) {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Subtotal</Text>
          <Text style={{ ...FONTS.h3 }}>{subTotal}</Text>
        </View>

        <LineDivider />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.h2 }}>Total</Text>
          <Text style={{ ...FONTS.h2 }}>{total}</Text>
        </View>
        <TextButton
          buttonContainerStyle={{
            height: 50,
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Confirm Schedual"
          labelStyle={{
            textAlign: "center",
            paddingTop: 12,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
}
