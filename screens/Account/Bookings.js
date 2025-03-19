import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, images, FONTS } from "../../constants";
import { Header, IconButton, LineDivider, TextButton } from "../../components";

const data = [
  {
    id: 1,
    img: images.center,
    serviceName: "Basic Service",
    date: new Date().toDateString(),
    status: "Complete",
  },
  {
    id: 2,
    img: images.center,
    serviceName: "Mechanic Appointment",
    date: new Date().toDateString(),
    status: "Complete",
  },
  {
    id: 3,
    img: images.center,
    serviceName: "Standard Service",
    date: new Date().toDateString(),
    status: "Pending",
  },
  {
    id: 4,
    img: images.center,
    serviceName: "Car Washing",
    date: new Date().toDateString(),
    status: "Complete",
  },
];

const BookingList = ({ item, onPress }) => (
  <View style={{ padding: SIZES.base + 5 }}>
    <View style={{ flexDirection: "row", paddingBottom: SIZES.base }}>
      <Image
        source={item.img}
        style={{ width: 120, height: 100, borderRadius: 4 }}
      />
      <View style={{ paddingHorizontal: SIZES.base * 2 }}>
        <Text style={{ ...FONTS.h3 }}>{item.serviceName}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{item.date}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: SIZES.base + 10,
          right: 0,
        }}
      >
        <Text
          style={{
            ...FONTS.h5,
            color: item.status === "Complete" ? COLORS.green : COLORS.primary,
          }}
        >
          {item.status}
        </Text>
      </View>
    </View>
    {item.status === "Pending" && (
      <TextButton
        label="Mark as Complete"
        buttonContainerStyle={{
          paddingTop: 10,
          marginBottom: 10,
          marginHorizontal: SIZES.base * 2,
          height: 40,
          borderRadius: 8,
        }}
        onPress={() => onPress(item)}
      />
    )}
    <LineDivider />
  </View>
);

const Bookings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title="Booking History"
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
      <FlatList
        style={{ paddingHorizontal: SIZES.base * 2 }}
        data={data}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, idx }) => (
          <BookingList
            item={item}
            onPress={(booking) => {
              console.log(booking);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookings;
