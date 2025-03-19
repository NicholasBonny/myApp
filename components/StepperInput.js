import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { IconButton } from ".";

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        width: 120,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
      }}
    >
      <IconButton
        onPress={() => onMinus()}
        icon={icons.minus}
        containerStyle={{
          width: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
        iconStyle={{
          height: 20,
          width: 20,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h2 }}>{value}</Text>
      </View>
      <IconButton
        onPress={() => onAdd()}
        icon={icons.plus}
        containerStyle={{
          width: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
        iconStyle={{
          height: 20,
          width: 20,
          tintColor: COLORS.primary,
        }}
      />
    </View>
  );
};

export default StepperInput;
