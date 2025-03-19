import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES, icons, constants } from "../../constants";
import {
  Header,
  LineDivider,
  TextButton,
  TextIconButton,
} from "../../components";

const DeliveryStatus = ({ navigation }) => {
  const [currentStep, setCurrentStep] = React.useState(3);

  function renderHeader() {
    return (
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 20,
        }}
      />
    );
  }

  function renderInfo() {
    return (
      <View
        style={{
          paddingTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.gray,
            textAlign: "center",
          }}
        >
          Esimated Delivery
        </Text>
        <Text style={{ ...FONTS.h2, textAlign: "center" }}>
          21 Sept, 2022 / 12:30 PM
        </Text>
      </View>
    );
  }

  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Track Order</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray }}>NY012283</Text>
        </View>
        <LineDivider lineStyle={{ backgroundColor: COLORS.lightGray2 }} />

        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {constants.track_order_status.map((item, idx) => (
            <View key={`Status-${idx}`}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: -5,
                }}
              >
                <Image
                  source={icons.check_circle}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor:
                      idx <= currentStep ? COLORS.primary : COLORS.lightGray1,
                  }}
                />
                <View style={{ marginLeft: SIZES.radius }}>
                  <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                  <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                    {item.sub_title}
                  </Text>
                </View>
              </View>
              {idx < constants.track_order_status.length - 1 && (
                <View>
                  {idx < currentStep && (
                    <View
                      style={{
                        height: 40,
                        width: 3,
                        marginLeft: 14,
                        backgroundColor: COLORS.primary,
                        zIndex: -1,
                      }}
                    />
                  )}
                  {idx >= currentStep && (
                    <Image
                      source={icons.dotted_line}
                      style={{ width: 4, height: 40, marginLeft: 14 }}
                      resizeMode="cover"
                    />
                  )}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{ marginTop: SIZES.radius, marginBottom: SIZES.padding }}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              height: 50,
            }}
          >
            <TextButton
              buttonContainerStyle={{
                width: "40%",
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancle"
              labelStyle={{
                color: COLORS.primary,
                paddingTop: 12,
              }}
              onPress={() => navigation.navigate("FoodDetail")}
            />
            <TextIconButton
              buttonContainerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              icon={icons.map}
              iconPosition="LEFT"
              iconStyle={{
                width: 20,
                height: 20,
                marginRight: SIZES.base,
                tintColor: COLORS.white,
              }}
              label="Map View"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              onPress={() => navigation.navigate("Map")}
            />
          </View>
        )}
        {currentStep === constants.track_order_status.length - 1 && (
          <TextButton
            label={"Done"}
            labelStyle={{ paddingTop: 12 }}
            buttonContainerStyle={{
              height: 50,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("FoodDetail")}
          />
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {renderHeader()}
      {renderInfo()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;
