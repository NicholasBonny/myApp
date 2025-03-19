import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, FONTS, images } from "../constants";
import TextIconButton from "./TextIconButton";
import TextButton from "./TextButton";

const HorizontalCard = ({
  constainerStyle,
  imageStyle,
  onPress,
  item,
  category,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...constainerStyle,
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        alignItems: "center",
      }}
    >
      <Image source={images.profile} style={imageStyle} />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ ...FONTS.body5, color: COLORS.gray2 }}>
          {item.center}
        </Text>
        <Text style={{ ...FONTS.h3, fontSize: 15 }}>{item.name}</Text>

        <TextIconButton
          icon={icons.star}
          label={item.rating}
          labelStyle={{
            color: item.rating > 0 ? COLORS.primary : COLORS.darkGray,
            fontSize: 8,
            paddingLeft: 5,
          }}
          buttonContainerStyle={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          iconPosition={"LEFT"}
          iconStyle={{
            width: 12,
            height: 12,
            tintColor: item.rating > 0 ? COLORS.primary : COLORS.darkGray,
          }}
        />
        <Text
          style={{
            ...FONTS.body5,
            fontSize: 14,
          }}
        >
          {item.area}
        </Text>
      </View>
      <View>
        {category === "booking" ? (
          <TextButton
            buttonContainerStyle={{ borderRadius: 5, height: 40 }}
            labelStyle={{ ...FONTS.h5, paddingHorizontal: 10, paddingTop: 10 }}
            label={"Book Now"}
            onPress={onPress}
          />
        ) : (
          <TextIconButton
            icon={icons.call}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.white }}
            iconPosition={"RIGHT"}
            buttonContainerStyle={{
              borderRadius: 5,
              height: 40,
              backgroundColor: COLORS.primary,
              paddingHorizontal: 10,
            }}
            labelStyle={{
              ...FONTS.h5,

              color: COLORS.white,
            }}
            label={"Call"}
            onPress={onPress}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
