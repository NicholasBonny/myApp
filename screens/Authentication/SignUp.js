import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "..";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);

  function isEnableSignUp() {
    return (
      email !== "" &&
      username !== "" &&
      password !== "" &&
      emailError == "" &&
      usernameError == "" &&
      passwordError == ""
    );
  }
  return (
    <AuthLayout title="Getting Started" subtitle="Create account to continue!">
      <View style={{ flex: 1, marginTop: SIZES.radius, marginHorizontal: 10 }}>
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
          label="Username"
          onChange={(value) => {
            utils.validateUsername(value, setUsernameError);
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  username === "" || (username !== " " && usernameError === "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username === ""
                      ? COLORS.gray
                      : username !== "" && usernameError === ""
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
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
          containerStyle={{ marginTop: SIZES.radius }}
          secureTextEntry={!showPass}
          appendComponent={
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}
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

        <TextButton
          label="Sign Up"
          disabled={!isEnableSignUp()}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
            paddingTop: 10,
          }}
          onPress={() => navigation.navigate("Otp")}
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
            label="Sign In"
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <View style={{ marginHorizontal: 10 }}>
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
      </View>
    </AuthLayout>
  );
};

export default SignUp;
