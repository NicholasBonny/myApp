import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MainLayout } from "../screens";
import {
  COLORS,
  constants,
  FONTS,
  SIZES,
  icons,
  dummyData,
} from "../constants";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../store/tabs/tabActions";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ lable, icon, onPress, isFocused }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      height: 40,
      marginBottom: SIZES.base,
      alignItems: "center",
      paddingLeft: SIZES.radius,
      borderRadius: SIZES.base,
      backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
    }}
    onPress={onPress}
  >
    <Image
      source={icon}
      style={{
        width: 20,
        height: 20,
        tintColor: COLORS.white,
      }}
    />
    <Text
      style={{
        marginLeft: 15,
        color: COLORS.white,
        ...FONTS.h3,
      }}
    >
      {lable}
    </Text>
  </TouchableOpacity>
);

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => (
  <DrawerContentScrollView
    scrollEnabled={true}
    contentContainerStyle={{ flex: 1 }}
  >
    <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
      <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
        {/* Close Button */}
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => navigation.closeDrawer()}
        >
          <Image
            source={icons.cross}
            style={{ height: 35, width: 35, tintColor: COLORS.white }}
          />
        </TouchableOpacity>
      </View>
      {/* Profile */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          alignItems: "center",
        }}
      >
        <Image
          source={dummyData.myProfile?.profile_image}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
        <View style={{ marginLeft: SIZES.radius }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            {dummyData.myProfile.name}
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
            View your profile
          </Text>
        </View>
      </TouchableOpacity>
      {/* Drawer Nav */}
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <CustomDrawerItem
          lable={constants.screens.home}
          icon={icons.home}
          onPress={() => {
            setSelectedTab(constants.screens.home);
            navigation.navigate("MainLayout");
          }}
          isFocused={selectedTab === constants.screens.home}
        />
        <CustomDrawerItem
          lable={constants.screens.my_wallet}
          icon={icons.wallet}
        />
        <CustomDrawerItem
          lable={constants.screens.notification}
          icon={icons.notification}
          onPress={() => {
            setSelectedTab(constants.screens.notification);
            navigation.navigate("MainLayout");
          }}
          isFocused={selectedTab === constants.screens.notification}
        />
        <CustomDrawerItem
          lable={constants.screens.favourite}
          icon={icons.favourite}
          onPress={() => {
            setSelectedTab(constants.screens.favourite);
            navigation.navigate("MainLayout");
          }}
          isFocused={selectedTab === constants.screens.favourite}
        />
        {/* Line Divider */}
        <View
          style={{
            height: 1,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor: COLORS.lightGray1,
          }}
        />
        <CustomDrawerItem lable="Track Your Order" icon={icons.location} />
        <CustomDrawerItem lable="Coupons" icon={icons.coupon} />
        <CustomDrawerItem lable="Settings" icon={icons.setting} />
        <CustomDrawerItem lable="Invite a friend" icon={icons.profile} />
        <CustomDrawerItem lable="Help Center" icon={icons.help} />
      </View>
      <View style={{ marginBottom: SIZES.padding }}>
        <CustomDrawerItem lable="Logout" icon={icons.logout} />
      </View>
    </View>
  </DrawerContentScrollView>
);

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => setProgress(props.progress), 0);
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedTab: state.tabReducer.selectedTab,
});

export default connect(mapStateToProps, { setSelectedTab })(CustomDrawer);
