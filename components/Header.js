import { View, Text } from "react-native";
import { FONTS } from "../constants";
import React from "react";

const Header = ({
  leftComponent,
  rightComponent,
  titleStyle,
  title,
  containerStyle,
}) => {
  return (
    <View style={{ height: 60, flexDirection: "row", ...containerStyle }}>
      {leftComponent}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
      </View>
      {rightComponent}
    </View>
  );
};

export default Header;
