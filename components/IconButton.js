import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants";
import React from "react";

const IconButton = ({ icon, iconStyle, onPress, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...containerStyle }}>
      <Image
        source={icon}
        style={{ width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
