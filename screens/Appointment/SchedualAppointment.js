import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";

import { COLORS, SIZES, icons, images, FONTS } from "../../constants";
import {
  FormInput,
  Header,
  IconButton,
  TextButton,
  TextIconButton,
} from "../../components";

const MECHANIC = {
  name: "Frankline Steve",
  rating: 4,
  title: "Senior Mechanic",
  photo: images.profile,
};

const SchedualAppointment = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Header
        title="Schedual Appointment"
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
      <ScrollView style={{ flex: 1, paddingHorizontal: SIZES.base * 2 }}>
        <View
          style={{
            height: 120,
            width: "100%",
            flexDirection: "row",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLORS.gray3,
          }}
        >
          <View style={{ width: "30%", height: "100%", padding: 5 }}>
            <Image
              source={MECHANIC.photo}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            />
          </View>
          <View style={{ paddingLeft: SIZES.base, paddingTop: SIZES.base }}>
            <Text style={{ ...FONTS.h3, fontSize: 18 }}>{MECHANIC.name}</Text>
            <Text style={{ ...FONTS.body3, fontSize: 14, color: COLORS.gray2 }}>
              {MECHANIC.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={icons.star}
                style={{ width: 12, height: 12, tintColor: COLORS.primary }}
              />
              <Text style={{ ...FONTS.body4, paddingLeft: 2 }}>
                {MECHANIC.rating}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: SIZES.base * 2 }}>
          <Text style={{ ...FONTS.body3, marginBottom: SIZES.padding }}>
            Please Select your prefered Time and Date{" "}
          </Text>
          <Text style={{ ...FONTS.body4 }}>Select Date and Time</Text>
          <TextIconButton
            icon={icons.clock}
            iconPosition={"LEFT"}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.black,
            }}
            label={`${date.toDateString()} @ ${date.toLocaleTimeString()}`}
            onPress={() => setShowDate(true)}
            labelStyle={{ color: COLORS.black, paddingLeft: SIZES.base }}
            buttonContainerStyle={{
              backgroundColor: COLORS.lightGray2,
              borderRadius: 5,
              paddingVertical: SIZES.base + 5,
              justifyContent: "flex-start",
              paddingHorizontal: SIZES.base,
              marginBottom: SIZES.base,
            }}
          />
          <DatePicker
            modal="date"
            open={showDate}
            date={date}
            onConfirm={(date) => {
              setShowDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setShowDate(false);
            }}
          />

          <FormInput
            label={"Location"}
            onChange={(location) => {
              setLocation(location);
            }}
            placeholder="Add Location"
            prependComponent={
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={icons.location_pin}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.black,
                  }}
                />
              </View>
            }
          />
        </View>
      </ScrollView>
      <TextButton
        label="Confirm Appointment"
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

export default SchedualAppointment;
