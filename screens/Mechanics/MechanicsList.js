import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import { Header, HorizontalCard, IconButton } from "../../components";
import { COLORS, SIZES, dummyData, icons } from "../../constants";

const MechanicsList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={"Find Nearby Mechanic"}
        leftComponent={
          <IconButton
            onPress={() => navigation.goBack()}
            icon={icons.back}
            iconStyle={{ width: 15, height: 15, tintColor: COLORS.black }}
          />
        }
        containerStyle={{
          paddingHorizontal: SIZES.base * 2,
          alignItems: "center",
        }}
      />

      <FlatList
        style={{ marginHorizontal: SIZES.base * 2 }}
        data={dummyData.mechanics}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, idx }) => (
          <HorizontalCard
            constainerStyle={{
              padding: SIZES.base + 8,
              marginTop: idx == 0 ? SIZES.base : 18,
              marginBotton:
                idx == dummyData.mechanics.length - 1 ? SIZES.padding : 0,
            }}
            imageStyle={{
              height: "100%",
              width: 100,
              borderRadius: SIZES.radius,
              marginRight: SIZES.padding,
            }}
            item={item}
            category={"booking"}
            onPress={() => navigation.navigate("MechanicDetails")}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MechanicsList;
