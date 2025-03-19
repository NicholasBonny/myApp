import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "..";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  function isEnableSendEmail() {
    return email !== "" && emailError == "";
  }

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
    >
      <View
        style={{ flex: 1, marginTop: SIZES.padding * 2, marginHorizontal: 10 }}
      >
        <FormInput
          label={"Email"}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email === "" || (email !== " " && emailError === "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <TextButton
          label="Send Email"
          disabled={!isEnableSendEmail()}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimary,
            paddingTop: 10,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
