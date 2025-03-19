import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, icons } from "../constants";

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={icons.star}
        style={{
          ...styles.rateStyle,
          ...iconStyle,
          tintColor: rating >= 1 ? activeColor : inactiveColor,
        }}
      />
      <Image
        source={icons.star}
        style={{
          ...styles.rateStyle,
          ...iconStyle,
          tintColor: rating >= 2 ? activeColor : inactiveColor,
        }}
      />
      <Image
        source={icons.star}
        style={{
          ...styles.rateStyle,
          ...iconStyle,
          tintColor: rating >= 3 ? activeColor : inactiveColor,
        }}
      />
      <Image
        source={icons.star}
        style={{
          ...styles.rateStyle,
          ...iconStyle,
          tintColor: rating >= 4 ? activeColor : inactiveColor,
        }}
      />
      <Image
        source={icons.star}
        style={{
          ...styles.rateStyle,
          ...iconStyle,
          tintColor: rating >= 5 ? activeColor : inactiveColor,
        }}
      />
      {/* <Text>Star</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rateStyle: {
    width: 13,
    height: 13,
  },
});

export default Rating;
