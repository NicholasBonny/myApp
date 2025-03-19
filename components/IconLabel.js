import { View, Text, Image } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <Image
        style={{
          height: 18,
          width: 18,
          ...iconStyle,
        }}
        source={icon}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
