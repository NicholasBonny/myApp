import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  COLORS,
  FONTS,
  dummyData,
  constants,
  SIZES,
  icons,
  images,
} from "../constants";
import { connect } from "react-redux";
import { setSelectedTab } from "../store/tabs/tabActions";
import { Home, Account, Notification, Centers } from "../screens";
import { Header } from "../components";
import LinearGradient from "react-native-linear-gradient";

const TabButton = ({
  onPress,
  label,
  isFocused,
  icon,
  outerContainerStyle,
  innerContainerStyle,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Animated.View
      style={[
        { flex: 1, alignItems: "center", justifyContent: "center" },
        outerContainerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flexDirection: "row",
            width: "80%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          },
          innerContainerStyle,
        ]}
      >
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            tintColor: isFocused ? COLORS.white : COLORS.gray2,
          }}
        />
        {isFocused && (
          <Text
            numberOfLines={1}
            style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h3 }}
          >
            {label}
          </Text>
        )}
      </Animated.View>
    </Animated.View>
  </TouchableWithoutFeedback>
);

const MainLayout = ({
  drawerAnimationStyle,
  selectedTab,
  setSelectedTab,
  navigation,
}) => {
  const flatListRef = React.useRef();

  React.useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (selectedTab === constants.screens.centers) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (selectedTab === constants.screens.help) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (selectedTab === constants.screens.account) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favouritTabFlex.value = withTiming(4, { duration: 500 });
      favouritTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouritTabFlex.value = withTiming(1, { duration: 500 });
      favouritTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
  }, [selectedTab]);

  //Reanimated Shared Value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouritTabFlex = useSharedValue(1);
  const favouritTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Styles
  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });
  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });
  const favouritFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouritTabFlex.value,
    };
  });
  const favouritColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouritTabColor.value,
    };
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        // ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      <Header
        containerStyles={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          alignItems: "center",
        }}
        // title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
              // borderWidth: 1,
              // borderColor: COLORS.gray2,
              // borderRadius: SIZES.radius,
            }}
            // onPress={() => navigation.openDrawer()}
          >
            <Image
              source={images.logo_01}
              style={{ width: 50, height: 55 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              paddingRight: 20,
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
            />
          </TouchableOpacity>
        }
      />
      {/* Content */}

      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <View style={{ width: SIZES.width, height: SIZES.height }}>
              {item.label === constants.screens.home && (
                <Home navigation={navigation} />
              )}
              {item.label === constants.screens.centers && (
                <Centers navigation={navigation} />
              )}

              {item.label === constants.screens.account && (
                <Account navigation={navigation} />
              )}
              {item.label === constants.screens.notification && (
                <Notification />
              )}
            </View>
          )}
        />
      </View>
      {/* Footer */}
      <View style={{ height: 85, justifyContent: "flex-start" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.gray2]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
          />
          <TabButton
            label={constants.screens.centers}
            icon={icons.car_repair_1}
            isFocused={selectedTab === constants.screens.centers}
            onPress={() => setSelectedTab(constants.screens.centers)}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
          />
          <TabButton
            label={constants.screens.help}
            icon={icons.help}
            isFocused={selectedTab === constants.screens.help}
            onPress={() => setSelectedTab(constants.screens.help)}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
          />
          <TabButton
            label={constants.screens.account}
            icon={icons.profile}
            isFocused={selectedTab === constants.screens.account}
            onPress={() => setSelectedTab(constants.screens.account)}
            outerContainerStyle={favouritFlexStyle}
            innerContainerStyle={favouritColorStyle}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = (state) => ({
  selectedTab: state.tabReducer.selectedTab,
});

export default connect(mapStateToProps, { setSelectedTab })(MainLayout);
