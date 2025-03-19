import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";
import {
  Header,
  IconButton,
  TextButton,
  TextIconButton,
} from "../../components";

const center = {
  name: "Spear Motors",
  img: images.center,
  rating: 4.8,
  mechanicsCount: 30,
  experience: "6 Years",
  about:
    "We are a one stop destination for all your car service needs. We are equiped with the latest tools and technologiesto provide you with high quality maintainace and repair services for your car. Our team of skilled technicians and mechanics are trained to handle all types of issues and ensure your vehical is running smoothly and efficiently. We 100% garantee that your vehical will be in great shape when we work on it.",
  services: [
    {
      id: 1,
      img: images.center,
      name: "Basic Service",
      estimatedTime: "4 hrs",
      price: 150000,
      details:
        "Including Changing Oil, Changing spark plug and dusting the engin",
    },
    {
      id: 2,
      img: images.center,
      name: "Car Painting",
      estimatedTime: "1 week",
      price: 700000,
      details: "Denting and painting",
    },
    {
      id: 3,
      img: images.center,
      name: "Car Washing",
      estimatedTime: "30 min",
      price: 20000,
      details: "Body washing",
    },
  ],
};

const ServiceCard = ({ service, containerStyle }) => (
  <View
    style={{
      width: "100%",
      height: 120,
      flexDirection: "row",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.gray2,
      padding: 8,
      ...containerStyle,
    }}
  >
    <View style={{ width: "68%" }}>
      <Text style={{ ...FONTS.h3, paddingBottom: SIZES.base }}>
        {service.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{ ...FONTS.body4, width: "100%", flexWrap: "wrap" }}
      >
        {service.details}
      </Text>
      <Text style={{ ...FONTS.body4, paddingVertical: 5 }}>
        Estimated Time: {service.estimatedTime}
      </Text>
      <Text style={{ ...FONTS.body4 }}>Price: UGX {service.price}</Text>
    </View>
    <View style={{ width: "32%", height: "100%" }}>
      <Image
        source={service.img}
        style={{
          width: "100%",
          height: "100%",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
    </View>
  </View>
);

const CenterDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        leftComponent={
          <IconButton
            icon={icons.back}
            onPress={() => navigation.goBack()}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
          />
        }
        title={center.name}
        containerStyle={{
          marginHorizontal: SIZES.base * 2,
          alignItems: "center",
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: SIZES.base * 2,
          paddingTop: SIZES.base,
        }}
      >
        <View style={{ height: 200, width: "100%", marginBottom: SIZES.base }}>
          <Image
            source={center.img}
            style={{ width: "100%", height: "100%", borderRadius: 8 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: SIZES.base,
          }}
        >
          <View>
            <Text style={{ ...FONTS.h4 }}>Rating</Text>
            <TextIconButton
              icon={icons.star}
              iconPosition={"LEFT"}
              iconStyle={{ width: 12, height: 12, tintColor: COLORS.primary }}
              label={center.rating}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h4 }}>Experience</Text>
            <Text style={{ ...FONTS.body4 }}>{center.experience}</Text>
          </View>
          <View>
            <Text style={{ ...FONTS.h4 }}>Mechanics</Text>
            <Text style={{ ...FONTS.body4 }}>{center.mechanicsCount}</Text>
          </View>
        </View>
        <View style={{ marginBottom: SIZES.base }}>
          <Text style={{ ...FONTS.h3, paddingBottom: 10 }}>About Us</Text>
          <Text style={{ ...FONTS.body4 }}>{center.about}</Text>
        </View>
        <View>
          <Text style={{ ...FONTS.h3, paddingBottom: 10 }}>What we offer</Text>
          {center.services.map((item, idx) => (
            <ServiceCard
              key={idx}
              service={item}
              containerStyle={{
                marginBottom: center.services.length === idx + 1 ? 30 : 10,
              }}
            />
          ))}
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
        onPress={() => navigation.push("CenterAppointment")}
      />
    </SafeAreaView>
  );
};

export default CenterDetails;
