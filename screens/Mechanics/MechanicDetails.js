import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, images, FONTS } from "../../constants";
import {
  Header,
  IconButton,
  TextButton,
  TextIconButton,
} from "../../components";

const MECHANIC = {
  photo: images.profile,
  name: "Frankline Steve",
  title: "Senior Mechanic",
  rating: 4.5,
  price: 1000,
  priceRate: "hr",
  experience: "5 yrs",
  description:
    "Am a guy to find and rectify that problem in your vehical.  I am expert in engine problem and 100% garantee that your vehical will be in great shape when i work on it.",
  works: ["engine", "battery", "oil"],
};

const MechanicDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={"Mechaninc Details"}
        leftComponent={
          <IconButton
            icon={icons.back}
            onPress={() => navigation.goBack()}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
          />
        }
        containerStyle={{
          paddingHorizontal: SIZES.base * 2,
          alignItems: "center",
        }}
      />
      <ScrollView
        style={{
          paddingHorizontal: SIZES.base * 2,
        }}
      >
        <View
          style={{
            height: 330,
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            source={MECHANIC.photo}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
          <View style={{ position: "absolute", bottom: 15, left: 20 }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {MECHANIC.name}
            </Text>
            <Text style={{ ...FONTS.h4, color: COLORS.white }}>
              {MECHANIC.title}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: SIZES.base * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ ...FONTS.h3 }}>Rating</Text>
              <TextIconButton
                icon={icons.star}
                iconPosition="LEFT"
                iconStyle={{
                  width: 13,
                  height: 13,
                  tintColor: COLORS.green,
                  marginRight: 4,
                }}
                label={MECHANIC.rating}
                buttonContainerStyle={{
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                }}
              />
            </View>
            <View>
              <Text style={{ ...FONTS.h3 }}>Charge</Text>
              <Text style={{ ...FONTS.body4 }}>
                UGX {MECHANIC.price}/{MECHANIC.priceRate}
              </Text>
            </View>
            <View>
              <Text style={{ ...FONTS.h3 }}>Experience</Text>
              <Text style={{ ...FONTS.body4 }}>{MECHANIC.experience}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: SIZES.base * 2 }}>
          <Text style={{ ...FONTS.h3, fontSize: 20, marginBottom: 6 }}>
            About Mechanic
          </Text>
          <Text style={{ ...FONTS.body4 }}>{MECHANIC.description}</Text>
        </View>
        <View style={{ marginTop: SIZES.base * 2 }}>
          <Text style={{ ...FONTS.h3, fontSize: 20, marginBottom: 6 }}>
            Works
          </Text>
          <View style={{ flexDirection: "row" }}>
            {MECHANIC.works.map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: COLORS.lightGray2,
                  borderRadius: 3,
                  marginRight: MECHANIC.works.length === idx + 1 ? 0 : 10,
                }}
              >
                <Image source={icons[item]} style={{ width: 30, height: 30 }} />
                <Text
                  style={{
                    ...FONTS.body4,
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <TextButton
        label="Schedule Appointment"
        buttonContainerStyle={{
          paddingTop: 12,
          marginBottom: 10,
          marginHorizontal: SIZES.base * 2,
          height: 50,
          borderRadius: 8,
        }}
        onPress={() => navigation.push("SchedualAppointment")}
      />
    </SafeAreaView>
  );
};

export default MechanicDetails;
