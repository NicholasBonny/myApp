import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const VerticalFoodCard = ({ constainerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...constainerStyle,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image style={{ width: 30, height: 30 }} source={icons.calories} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {" "}
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            height: 20,
            width: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={{ height: "100%", width: "100%" }} />
      </View>
      <View style={{ alignItems: "center", marginTop: -20 }}>
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            alignItems: "center",
            ...FONTS.body5,
            width: "100%",
          }}
          numberOfLines={3}
        >
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
