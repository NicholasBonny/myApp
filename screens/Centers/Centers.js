import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, dummyData, icons, FONTS } from "../../constants";
import { IconButton } from "../../components";

const CenterCard = ({ center, constainerStyle, onPress, onPressFav }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        width: "100%",
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        flexDirection: "row",
        padding: 5,
        ...constainerStyle,
      }}
    >
      <View style={{ width: "35%", height: "100%", borderRadius: 3 }}>
        <Image
          source={center.img}
          style={{ width: "100%", height: "100%", borderRadius: 3 }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={{ ...FONTS.h3, fontSize: 18, paddingBottom: 10 }}>
          {center.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.star}
              style={{ width: 10, height: 10, tintColor: COLORS.primary }}
            />
            <Text style={{ ...FONTS.h4 }}>{center.rating}</Text>
          </View>
          <Text style={{ ...FONTS.h4 }}>{center.experience}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {center.services.slice(0, 3).map((item, idx) => (
            <Text key={idx} style={{ ...FONTS.body5 }}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <IconButton
        icon={icons.favourite}
        iconStyle={{ width: 18, height: 18, tintColor: COLORS.gray3 }}
        onPress={onPressFav}
      />
    </View>
  </TouchableOpacity>
);

const Centers = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        style={{ marginHorizontal: SIZES.base * 2 }}
        data={dummyData.centers}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, idx }) => (
          <CenterCard
            constainerStyle={{
              padding: SIZES.base + 8,
              marginTop: idx == 0 ? SIZES.base : 18,
              marginBotton:
                idx == dummyData.centers.length - 1 ? SIZES.padding * 2 : 0,
            }}
            center={item}
            onPress={() => navigation.push("CenterDetails")}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Centers;
