import React from "react";
import { View, Text } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";
import { TextButton } from "../../components";
import { AuthLayout } from "..";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) return prevTimer - 1;
        return prevTimer;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent ot nbonny@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* <OTPInputView
          pinCount={4}
          style={{
            width: "95%",
            height: 60,
            alignItems: "center",
            marginHorizontal: 10,
          }}
          code="1234"
          codeInputFieldStyle={{
            height: 60,
            width: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => console.log(code)}
        /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text>Didn't receive the code? </Text>
          <TextButton
            label={`Resend ${timer}s`}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 50 }}>
        <TextButton
          label="Continue"
          onPress={() => navigation.replace("Home")}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            paddingTop: 10,
          }}
        />
        <View
          style={{
            marginTop: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            By signing in you agree to our{" "}
          </Text>
          <TextButton
            label="Terms And Conditions"
            labelStyle={{ color: COLORS.primary, ...FONTS.body3 }}
            buttonContainerStyle={{ backgroundColor: null }}
            onPress={() => console.lof("TnC")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
