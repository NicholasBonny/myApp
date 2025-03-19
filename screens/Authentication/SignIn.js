import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "..";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  function isEnableSignIn() {
    return email !== "" && password !== "" && emailError == "";
  }
  return (
    <AuthLayout
      title="Lets Sign You In"
      // subtitle="Welcome back, You've been missed."
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.base * 2,
        }}
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
        <FormInput
          label={"Password"}
          autoCompleteType="password"
          onChange={(value) => {
            setPassword(value);
          }}
          containerStyle={{ marginTop: SIZES.radius }}
          secureTextEntry={!showPass}
          appendComponent={
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                width: 40,
              }}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label={"Forgot Password"}
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
        <TextButton
          label="Sign In"
          disabled={!isEnableSignIn()}
          onPress={() => navigation.replace("Otp")}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
            paddingTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>

      {/* <View style={{ marginHorizontal: 10 }}>
        <TextIconButton
          label="Continue With Facebook"
          icon={icons.fb}
          iconPosition="LEFT"
          buttonContainerStyle={{
            height: 45,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
            marginTop: SIZES.radius,
          }}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
          onPress={() => console.log("FB")}
        />
        <TextIconButton
          label="Continue With Google"
          icon={icons.google}
          iconPosition="LEFT"
          buttonContainerStyle={{
            height: 45,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            marginTop: SIZES.radius,
          }}
          iconStyle={{
            tintColor: COLORS.red,
          }}
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.black }}
          onPress={() => console.log("Google")}
        />
      </View> */}
    </AuthLayout>
  );
};

export default SignIn;
