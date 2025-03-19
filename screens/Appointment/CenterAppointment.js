import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";

import { COLORS, SIZES, icons, images, FONTS } from "../../constants";
import {
  FooterTotal,
  FormInput,
  Header,
  IconButton,
  TextIconButton,
} from "../../components";

const center = {
  name: "Spear Motors",
  rating: 4.8,
  location: "Nakawa",
  photo: images.center,
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

const FormSelectPicker = ({ item, onPress, containerStyle }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View
      style={{
        height: 45,
        width: "100%",
        padding: 8,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const CenterAppointment = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [location, setLocation] = useState("");
  const [selectedService, setSelectedService] = useState(null);

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
              source={center.photo}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            />
          </View>
          <View style={{ paddingLeft: SIZES.base, paddingTop: SIZES.base }}>
            <Text style={{ ...FONTS.h3, fontSize: 18 }}>{center.name}</Text>
            <Text style={{ ...FONTS.body3, fontSize: 14, color: COLORS.gray2 }}>
              {center.location}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={icons.star}
                style={{ width: 12, height: 12, tintColor: COLORS.primary }}
              />
              <Text style={{ ...FONTS.body4, paddingLeft: 2 }}>
                {center.rating}
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
            label={"Car Type"}
            onChange={(location) => {
              setLocation(location);
            }}
            placeholder="Add Car type"
            prependComponent={
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={icons.car}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.black,
                  }}
                />
              </View>
            }
          />

          <View style={{ marginVertical: 10 }}>
            <Text style={{ ...FONTS.body4 }}>Select Service</Text>
            <TextIconButton
              icon={icons.car_repair_1}
              iconPosition={"LEFT"}
              iconStyle={{
                width: 18,
                height: 18,
                tintColor: COLORS.black,
              }}
              label={selectedService && selectedService.name}
              onPress={() => setShowServices(!showServices)}
              labelStyle={{ color: COLORS.black, paddingLeft: SIZES.base }}
              buttonContainerStyle={{
                backgroundColor: COLORS.lightGray2,
                borderRadius: 5,
                paddingVertical: SIZES.base + 5,
                justifyContent: "flex-start",
                paddingHorizontal: SIZES.base,
              }}
            />
            {showServices && (
              <View
                style={{
                  backgroundColor: COLORS.lightGray2,
                  width: "100%",
                  height: "auto",
                  paddingHorizontal: 20,
                }}
              >
                {center.services.map((item, idx) => (
                  <FormSelectPicker
                    key={idx}
                    item={item}
                    onPress={(service) => {
                      setSelectedService(service);
                      setShowServices(false);
                    }}
                  />
                ))}
              </View>
            )}
          </View>

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
      <FooterTotal
        subTotal={`UGX ${selectedService ? selectedService.price : 0}`}
        total={`UGX ${selectedService ? selectedService.price : 0}`}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default CenterAppointment;
