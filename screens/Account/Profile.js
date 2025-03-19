import { View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons, images } from "../../constants";
import { FormInput, Header, IconButton, TextButton } from "../../components";

const Profile = ({ navigation }) => {
  const [formState, setFormState] = useState({
    firstName: "Nicholas",
    lastName: "Bonny",
    userName: "NBonny",
    email: "nbonny@gmail.com",
    phone: "256704356783",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title="Account Profile"
        containerStyle={{
          alignItems: "center",
          marginBottom: SIZES.base,
          paddingHorizontal: SIZES.base * 2,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            iconStyle={{ width: 18, height: 18, tintColor: COLORS.black }}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <ScrollView style={{ paddingHorizontal: SIZES.base * 2 }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: 120, height: 120, position: "relative" }}>
            <Image
              source={images.profile}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
            <IconButton
              containerStyle={{
                position: "absolute",
                bottom: 2,
                right: 8,
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={icons.plus}
              iconStyle={{ width: 18, height: 18, tintColor: COLORS.white }}
            />
          </View>
        </View>
        <View style={{ marginVertical: SIZES.padding }}>
          <FormInput
            label={"First Name"}
            onChange={(firstName) => setFormState({ ...formState, firstName })}
            defaultValue={formState.firstName}
            containerStyle={{ marginBottom: SIZES.base + 5 }}
          />
          <FormInput
            label={"Last Name"}
            onChange={(lastName) => setFormState({ ...formState, lastName })}
            defaultValue={formState.lastName}
            containerStyle={{ marginBottom: SIZES.base + 5 }}
          />
          <FormInput
            label={"User Name"}
            onChange={(userName) => setFormState({ ...formState, userName })}
            defaultValue={formState.userName}
            containerStyle={{ marginBottom: SIZES.base + 5 }}
          />
          <FormInput
            label={"Phone Number"}
            onChange={(phone) => setFormState({ ...formState, phone })}
            defaultValue={formState.phone}
          />
        </View>
      </ScrollView>
      <TextButton
        label="Update"
        buttonContainerStyle={{
          paddingTop: 12,
          marginBottom: 10,
          marginHorizontal: SIZES.base * 2,
          height: 50,
          borderRadius: 8,
        }}
        // onPress={() => navigation.push("SchedualAppointment")}
      />
    </SafeAreaView>
  );
};

export default Profile;
