import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, images, FONTS, icons } from "../../constants";

const NextIconTextButton = ({
  icon,
  label,
  iconStyles,
  labelStyles,
  onPress,
  buttonContainerStyle,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        backgroundColor: COLORS.lightGray2,
        ...buttonContainerStyle,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          marginRight: 10,
          ...iconStyles,
        }}
      />
      <Text style={{ ...FONTS.h4, flex: 1, ...labelStyles }}>{label}</Text>

      <Image
        source={icons.next}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
        }}
      />
    </View>
  </TouchableOpacity>
);

const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        style={{ paddingHorizontal: SIZES.base * 2 }}
        showVerticalIndicator={false}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: SIZES.base,
          }}
        >
          <Image
            source={images.profile}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <View style={{ paddingTop: 5 }}>
            <Text style={{ ...FONTS.h3 }}>Nicholas Bonny</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
              +256704378267
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ ...FONTS.h3, paddingTop: SIZES.padding }}>
            Account Settings
          </Text>
          <NextIconTextButton
            icon={icons.profile}
            label="Profile"
            buttonContainerStyle={{ marginVertical: SIZES.base * 2 }}
            onPress={() => navigation.push("Profile")}
          />
          <NextIconTextButton
            icon={icons.menu}
            label="Booking History"
            buttonContainerStyle={{ marginBottom: SIZES.base * 2 }}
            onPress={() => navigation.push("Bookings")}
          />
          <NextIconTextButton
            icon={icons.help}
            label="About Us"
            buttonContainerStyle={{ marginBottom: SIZES.base * 2 }}
          />
          <NextIconTextButton
            icon={icons.favourite}
            label="Favourite"
            buttonContainerStyle={{ marginBottom: SIZES.base * 2 }}
          />
          <NextIconTextButton
            icon={icons.notification}
            label="Notifcations"
            buttonContainerStyle={{ marginBottom: SIZES.base * 2 }}
          />
          <NextIconTextButton
            icon={icons.logout}
            label="Logout"
            buttonContainerStyle={{ marginBottom: SIZES.base * 2 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
