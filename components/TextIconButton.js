import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../constants";

const TextIconButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  icon,
  iconStyle,
  iconPosition,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition === "LEFT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
      <Text
        style={{
          ...labelStyle,
          ...FONTS.body3,
        }}
      >
        {label}
      </Text>
      {iconPosition === "RIGHT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default TextIconButton;
