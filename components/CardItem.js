import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const CardItem = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 90,
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 55,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="center"
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>
        {item.name}
      </Text>
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          height: 25,
          width: 25,
        }}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
