import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  CartQuantityButton,
  Header,
  IconButton,
  IconLabel,
  LineDivider,
  TextButton,
  Rating,
  StepperInput,
} from "../../components";
import {
  FONTS,
  COLORS,
  dummyData,
  SIZES,
  icons,
  images,
} from "../../constants";

const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [qty, setQty] = React.useState(1);

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 20,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
              <Text style={{ color: COLORS.darkGray, ...FONTS.body4 }}>
                {foodItem?.calories} calories
              </Text>
            </View>
            <Image
              source={icons.love}
              style={{
                width: 18,
                height: 18,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{ height: 170, width: "100%" }}
          />
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h1 }}>{foodItem?.name} </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "center",
              ...FONTS.body3,
            }}
          >
            {foodItem?.description}
          </Text>
          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            <IconLabel
              icon={icons.star}
              containerStyle={{ backgroundColor: COLORS.primary }}
              label="4.5"
              labelStyle={{ color: COLORS.white }}
            />
            <IconLabel
              icon={icons.clock}
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              label="30 Mins"
            />
            <IconLabel
              icon={icons.dollar}
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              label="Free Shipping"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes: </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, idx) => (
                <TextButton
                  key={`item-${idx}`}
                  buttonContainerStyle={{
                    width: 50,
                    height: 50,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize === item.id ? COLORS.primary : COLORS.gray,
                    backgroundColor:
                      selectedSize === item.id ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize === item.id ? COLORS.white : COLORS.gray,
                    ...FONTS.body2,
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderResturant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 45, height: 45, borderRadius: SIZES.radius }}
          source={images.profile}
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Samba Resturant</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            1.2 Km away from you
          </Text>
        </View>
        <Rating rating={4} iconStyle={{ marginLeft: 3 }} />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 80,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) setQty(qty - 1);
          }}
        />
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2="$ 15.99"
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {renderDetails()}
        <LineDivider />
        {renderResturant()}
      </ScrollView>
      {/* Footer */}
      <LineDivider />
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
