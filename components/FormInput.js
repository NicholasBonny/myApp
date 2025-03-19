import { View, Text, TextInput } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../constants";

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  inputContainerStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
  maxLength,
  defaultValue,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* Label & error */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{label}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.red }}>{errorMsg}</Text>
      </View>
      {/* text input */}
      <View
        style={{
          flexDirection: "row",
          height: SIZES.height > 800 ? 50 : 45,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.height > 800 ? SIZES.base : 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{ flex: 1, color: COLORS.black, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={(text) => onChange(text)}
          defaultValue={defaultValue}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
