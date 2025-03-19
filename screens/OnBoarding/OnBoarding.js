import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  FlatList,
} from "react-native";
import { constants, images, FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../components";

const OnBoarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const ScrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef(0);

  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotsPosition = Animated.divide(ScrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, idx) => {
          const dotColor = dotsPosition.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotsPosition.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${idx}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          style={{
            width: SIZES.width * 0.5,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View style={{ height: 100 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dots />
        </View>
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.darkGray,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 40,
                width: 100,
                borderRadius: SIZES.radius,
                paddingTop: 8,
              }}
              onPress={() => {
                let index = Math.ceil(Number(ScrollX._value / SIZES.width));
                if (index < constants.onboarding_screens.length - 1) {
                  flatListRef?.current?.scrollToIndex({
                    index: index + 1,
                    animated: true,
                  });
                } else {
                  navigation.replace("SignIn");
                }
              }}
            />
          </View>
        )}
        {currentIndex === constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Lets get started"
              buttonContainerStyle={{
                height: 40,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius,
                paddingTop: 8,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
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
      {/* {renderHeaderLogo()} */}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        paginatingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, idx }) => (
          <View
            style={{
              width: SIZES.width,
            }}
          >
            <View
              style={{
                flex: 3,
              }}
            >
              <ImageBackground
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: idx === 1 ? "98%" : "100%",
                  width: "100%",
                }}
                source={item.backgroundImage}
              >
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.8,
                    height: SIZES.width,
                    marginBottom: -SIZES.padding,
                  }}
                />
              </ImageBackground>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SIZES.radius,
              }}
            >
              <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  textAlign: "center",
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.padding,
                  ...FONTS.body3,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
